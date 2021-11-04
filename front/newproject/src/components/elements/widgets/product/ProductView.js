import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import Rating from '../../ui/Rating';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function ProductView({categoryName, sliceNumber, columNumber, posts, cateNo}){

    // console.log("sliceNumber"+sliceNumber)
    // console.log("colnumNumber"+columNumber)
    const [newData, setNewData] = useState([]);
    console.log(cateNo)

    // useEffect(()=>{
    //     const fetchPosts = async() => {
    //         await axios.get("/catalog-service/catalogs")
    //         .then(data => {
    //             setPosts(data.data)
    //             // console.log("Shop: ")
    //             // console.log(data.data)
    //         })
    //         .catch(error => console.log(error))
    //     }
    //     fetchPosts();
    // },[])
    
    // useEffect(() => {
    //     setNewData(posts)
    //     console.log("newData")
    //     console.log(newData)
    // })
    // const {cateNo} = useParams();
    // const {url} = useParams();
    // console.log(cateNo);
    // console.log(url);
    // setNewData(posts);
    // useEffect(()=>{
    //     axios.get("/catalog-service/catalogs")
    //     .then(data => {
    //         setNewData(data.data)
    //         // console.log("View:")
    //         // console.log(data.data)
    //     })
    //     .catch(error => console.log(error))
    // },[])

    // useEffect(() => {
    //     fetch(`http://${process.IP}:${process.PORT}/product/`)
    //     .then(res => {
    //         return res.json();
    //     })
    //     .then(data => {
    //         setnewData(data);
    //         console.log(data);
    //     })
        
    // },[process.IP, process.PORT]);

    // const searchData = categoryName
    // ? newData.filter(
    //     item => item.category.filter(single => single === categoryName)[0]
    //   )
    // : newData;

    // const handleDelete = (id) => {
    //     fetch(`http://${process.IP}:${process.PORT}/wish/${id}`,{
    //         method: "DELETE"
    //     }).then(
    //         alert("삭제되었습니다.")
    //     )
    // }

    // const handlePutCompareList = (id) => {

    //     fetch(`http://${process.IP}:${process.PORT}/product/${id}`)
    //     .then(res => {
    //         return res.json();
    //     })
    //     .then(data => {
    //         fetch(`http://${process.IP}:${process.PORT}/compare`,{
    //             method: "POST",
    //             headers: {
    //                 "Content-Type": "application/json",
    //             },
    //             body: JSON.stringify({
    //                 id: data.id,
    //                 name: data.name,
    //                 image: data.image,
    //                 price: data.price,
    //                 discount: data.discount,
    //                 shortDescription: data.shortDescription,
    //                 rating : data.rating,
    //             }),
    //         })
    //     }).then(
    //         alert("success")
    //     )
    // }

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
        <div className="row mt-5">
            {posts &&
                posts.map((item, index) => (   
                    <div className={`col-xl-${columNumber} col-md-6 col-lg-${columNumber} col-sm-6`} key={index}>
                        <div className="product-wrap mb-25">
                            <div className="product-img">
                                <Link to={`/productdetail/${item.productId}`}>
                                    <img className="default-img" src="/assets/img/product/fashion/8.jpg" alt="" />
                                    <img className="hover-img" src="/assets/img/product/fashion/6.jpg" alt="" />
                                </Link>
                                {/* <div className="product-img-badges">
                                    {
                                        item.discount > 0 ? <span className="pink">{item.discount}%</span> : ''
                                    }
                                    {
                                        item.new ? <span className="purple">new</span> : ''
                                    }
                                </div> */}
                                <div className="product-action">
                                    <div className="pro-same-action pro-wishlist">
                                        <button
                                            value={item.productId}
                                            onClick={() => handlePutWishList(item.productId)}
                                        >
                                            <i className="las la-bookmark"></i>
                                        </button>
                                    </div>
                                    <div className="pro-same-action pro-cart">
                                        <button disabled="" className="active">{categoryName}</button>
                                    </div>
                                    <div className="pro-same-action pro-quickview">
                                        <Link to={`/productdetail/${item.productId}`}>
                                            <i className="las la-eye"></i>
                                        </Link>
                                    {/* <button disabled="" className="active">Buy</button> */}
                                    </div>
                                    {/* <div className="pro-same-action pro-quickview">
                                        <button 
                                            className="" 
                                            title={item.id} 
                                            onClick={() => handlePutCompareList(item.id)} 
                                            value={item.id}
                                        >
                                            <i className="las la-eye"></i>
                                        </button>
                                    </div> */}
                                </div>
                            </div>
                            <div className="product-content text-center">
                                <h3><Link to={`/productdetail/${item.productId}`}>{item.productName}</Link></h3>
                                {/* <div className="product-rating">
                                    {item.rating && item.rating > 0 ? (
                                        <Rating ratingValue={item.rating} />
                                    ) : (
                                    ""
                                    )}
                                </div> */}
                                <div className="product-price">
                                    <span>{item.unitPrice}원</span> 
                                    {/* <span className="old">{(item.price * ((100+item.discount)/100)).toFixed(2)}</span> */}
                                </div>
                            </div>
                        </div>
                    </div>        
            
                )).slice(0, sliceNumber)
            }
        </div>
        
    );
}



