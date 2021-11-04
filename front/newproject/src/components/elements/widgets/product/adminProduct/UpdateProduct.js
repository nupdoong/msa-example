import React, {useState, useEffect} from 'react';
import { useHistory, useParams } from "react-router";
import axios from 'axios';

export default function UpdateProduct(){
    const { productId } = useParams();
    console.log(productId)
    const history = useHistory();

    const [values, setValues] = useState({
        productName: '',
        qty: '',
        unitPrice: '',
        detail: '',
    })
    const [data, setData] = useState([])

    const selectList = [
        {
            cate: "소설",
            cateNo: 1
        },
        {
            cate: "유아",
            cateNo: 2
        },
        {
            cate: "인문",
            cateNo: 3
        },
        {
            cate: "과학",
            cateNo: 4
        },
        {
            cate: "수험",
            cateNo: 5
        },
        {
            cate: "만화",
            cateNo: 6
        }
    ];
    const [selected, setSelected] = useState([]);
    
    const fetchItem = async () =>{
        await axios.get(`/catalog-service/catalogs/catalog/${productId}`,{
            headers: {
                Authorization: `Bearer ${sessionStorage.token}`
            }
        })
        .then(data=>{
            setData(data.data)
            console.log(data.data)
        })
        .catch(error => console.log(error))
    }

    useEffect(()=>{
        fetchItem();
    },[]);

    const handleChangeForm = (e) => {
        setValues({ 
            ...values, 
            [e.target.name]: e.target.value
        });
    }

    const handleSetSeleted = (e) => {
        console.log(e.target.value)
        setSelected(e.target.value)
    }

    const handlePutLists = (e) => {
        //alert(usersDatas.length);
        //console.log(values);
        e.preventDefault();
        fetch(`/catalog-service/catalogs/${productId}`,{
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
                'API-Key': 'secret',
                "Access-Control-Allow-Origin" : `http://localhost:8000/catalog-service/catalogs/${productId}`,
                "Access-Control-Allow-Credentials": true
            },
            body: JSON.stringify({
                cateNo: selected,
                productName: values.productName,
                qty: values.qty,
                unitPrice: values.unitPrice,
                detail: values.detail
            }),
        }).
        then(
            alert("success"),
            // history.push('/')
            history.goBack()
            //window.location.href = '/'

        )
    }
    
    
    return(

        <div className="card-body">
            <div className="myaccount-info-wrapper">
            <form  onSubmit={handlePutLists}>
                <div className="row">
                    <div className="col-lg-1 col-md-1">
                        <div className="billing-info">
                            <label>Category</label>
                            <select onChange={handleSetSeleted} value={selected}>
                                {
                                    selectList.map((item, index) => (
                                        <option value={item.cateNo} key={index}>
                                            {item.cate}
                                        </option>
                                    ))
                                }
                            </select>
                            {/* <p>
                                Selected: <b>{selected}</b>
                            </p> */}
                        </div>
                    </div>
                    <div className="col-lg-12 col-md-12">
                        <div className="billing-info">
                            <label>ProductName</label>
                            <input 
                                type="text"
                                name="productName"
                                value={values.productName}
                                onChange={handleChangeForm}
                                placeholder={data.productName}
                            />
                        </div>
                    </div>                 
                    
                    <div className="col-lg-12 col-md-12">
                        <div className="billing-info">
                            <label>qty</label>
                            <input 
                                type="number"
                                name="qty"
                                value={values.qty}
                                onChange={handleChangeForm}
                                placeholder={data.qty}
                            />
                        </div>
                    </div>
          

                    <div className="col-lg-12 col-md-12">
                        <div className="billing-info">
                            <label>unitPrice</label>
                            <input 
                                type="number"
                                name="unitPrice"
                                value={values.unitPrice}
                                onChange={handleChangeForm}
                                placeholder={data.unitPrice}
                            />
                        </div>
                    </div>

        
                   
                    <div className="col-lg-12 col-md-12">
                        <div className="billing-info">
                            <label>Detail</label>
                            <input 
                                type="text"
                                name="detail"
                                value={values.detail}
                                onChange={handleChangeForm}
                                placeholder={data.detail}
                            />
                        </div>
                    </div>
   
                    
                </div>
                
                <div className="billing-back-btn">
                    <div className="billing-btn">
                        <button type="submit">등록</button>
                    </div>
                </div>
                </form>
            </div>
        </div>
    );
}