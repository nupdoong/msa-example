import React, {useState, useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import axios from 'axios';

export default function AddBuyAndCart({data, productId}) {
    
    let process = require('../../../../../myProcess.json');

    const [count, setCount] = useState(1);
    const [sideMenuCartDatas, setSideMenuCartDatas] = useState([]);

    useEffect(()=>{
        fetch(`http://${process.IP}:${process.PORT}/sidemenu/5`)
        .then(res => {
            return res.json();
        })
        .then(data => {
            setSideMenuCartDatas(data);
            console.log(data);
        });
    },[process.IP, process.PORT]);

    const handleCountAdd = () => {
        setCount(count+1);
    }

    const handleCountDec = () => {
        count > 1 ? setCount(count-1) : alert("최소 수량은 1개 입니다.")
    }


    const handlePutCompareList = () => {

        fetch(`http://${process.IP}:${process.PORT}/compare`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id: data.id,
                name: data.name,
                image: data.image,
                price: data.price,
                discount: data.discount,
                shortDescription: data.shortDescription,
                rating : data.rating,
            }),
        }).
        then(
            alert("success")
        )

    }

   // 장바구니에 담기
   const handlePutWishList = (productId) => {
        
    axios.post(`/cart-service/carts/${sessionStorage.userId}`, {
        productId: productId
    })
    .then(res=>{
        alert("장바구니 담기 성공")
        console.log(res)
    })
    .catch(res=>{
        alert("장바구니 담기 실패")
        console.log(res)
    })
}


    
    return(
        <div className="pro-details-quality">
            <div className="cart-plus-minus">
                <button className="dec qtybutton" onClick={()=>handleCountDec()}>-</button>
                <input className="cart-plus-minus-box" type="text" readonly="" value={count}/>
                <button className="inc qtybutton" onClick={()=>handleCountAdd()}>+</button>
            </div>
            <div className="pro-details-cart btn-hover">
                <button onClick={()=> handlePutWishList(productId)}> Add To Cart </button>
            </div>
            
            <div className="pro-details-cart btn-hover ml-0"> 
                {/* <button onClick={()=> handlePutWishList(productId)}>Buy Now</button> */}
                <Link to={`/payment/${count}/${productId}/${sessionStorage.userId}`}>Buy Now</Link>
            </div>
            
            <div className="pro-details-wishlist">
                <button className="" title="Add to wishlist" onClick={()=> handlePutWishList()}>
                    <i className="las la-bookmark"></i>
                </button>
            </div>
            <div className="pro-details-compare">
                <button className="" title="Add to compare" onClick={()=> handlePutCompareList()}>
                    <i className="las la-random"></i>
                </button>
            </div>
        </div>
    );
}