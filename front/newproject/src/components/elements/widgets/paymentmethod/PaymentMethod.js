import React, { useState, useEffect } from 'react';
import { Fragment } from 'react';
import { useParams, useHistory } from 'react-router';
import axios from 'axios';

export default function PaymentMethod() {
    const { productId } = useParams();
    const { userId } = useParams();
    const { count } = useParams();
    const history = useHistory();
    
    const [userDatas, setUserDatas] = useState([])
    const [bookItem, setBookItem] = useState([])

    const [values, setValues] = useState({
        zipcode: '',
        address1: '',
        address2: '',
    })

    const handleChangeForm = (e) => {
        setValues({ 
            ...values, 
            [e.target.name]: e.target.value
        });
    }

    const fetchUser = async () =>{
        await axios.get(`/user-service/users/${userId}`,{
            headers: {
                Authorization: `Bearer ${sessionStorage.token}`
            }
        })
        .then(data=>{
            setUserDatas(data.data)
            console.log(data.data)
        })
        .catch(error => console.log(error))
    }

    const fetchItem = () => {
        axios.get(`/catalog-service/catalogs/catalog/${productId}`)
        .then(data=>{
            console.log(data.data)
            setBookItem(data.data)
        })
        .catch(error => console.log(error))
    }

    useEffect(()=>{
        fetchUser();
        fetchItem();
    },[]);

    const handlePutLists = (e) => {
        //alert(usersDatas.length);
        //console.log(values);
        e.preventDefault();
        fetch(`/order-service/${sessionStorage.userId}/orders`,{
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'API-Key': 'secret',
                "Access-Control-Allow-Origin" : `http://localhost:8000/order-service/${sessionStorage.userId}/orders`,
                "Access-Control-Allow-Credentials": true
            },
            body: JSON.stringify({    
                productId: bookItem.productId,
                productName: bookItem.productName,
                qty: count,
                unitPrice: bookItem.unitPrice,
                zipcode: values.zipcode,
                address1: values.address1,
                address2: values.address2
            }),
        })
        .then(
            alert("success"),
            history.push('/finished')
            
            //window.location.href = '/'

        )
    }

    return (
        <div>

            <div className="tax-wrapper ">
                <form onSubmit={handlePutLists}>
                <div className="tax-select-wrapper">
                <br />
                    <br />
                    <div class="row justify-content-md-center">
                        <div className=" col-md-6">
                            <div className="cart-tax">
                                <div className="title-wrap">
                                    <h4 className="cart-bottom-title section-bg-gray">배송지 입력</h4>
                                </div>
                                <div className="tax-wrapper">
                                    <div className="tax-select-wrapper">

                                        <div className="tax-select">
                                            <label>* 받는 사람</label>
                                            <input type="text" placeholder={userDatas.name}/>
                                        </div>
                                        <div className="tax-select">
                                            <label>* Zipcode</label>
                                            <input type="text" 
                                                    name="zipcode" 
                                                    onChange={handleChangeForm} 
                                                    placeholder={userDatas.zipcode}/>
                                        </div>
                                        <div className="tax-select">
                                            <label>* 주소</label>
                                            <input type="text" 
                                                    name="address1" 
                                                    onChange={handleChangeForm} 
                                                    placeholder={userDatas.address1}/>
                                        </div>
                                        <div className="tax-select">
                                            <label>* 상세주소</label>
                                            <input type="text" 
                                                    name="address2" 
                                                    onChange={handleChangeForm} 
                                                    placeholder={userDatas.address2}/>
                                        </div>
                                        {/* <div className="tax-select">
                                            <label>* 우편번호</label>
                                            <input type="text" />
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <br />
                    
                    <div class="row justify-content-md-center">
                        <div className=" col-md-6">
                            <div className="cart-tax">
                                <div className="title-wrap">
                                    <h4 className="cart-bottom-title section-bg-gray">결제수단</h4>
                                </div>
                                <div className="tax-wrapper">
                                    <div className="tax-select-wrapper">


                                        <div class="form-check">
                                            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1"></input>
                                            <label className="form-check-label" for="exampleRadios1">
                                                지갑 결제
                                            </label>
                                            <p>{userDatas.wallet}</p>
                                        </div>
                                        {/* <div class="form-check">
                                            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2"></input>
                                            <label className="form-check-label" for="exampleRadios2">
                                                무통장 입금(가상계좌)
                                            </label>
                                        </div>

                                        <div class="form-check">
                                            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3"></input>
                                            <label className="form-check-label" for="exampleRadios3">
                                                포인트 결제
                                            </label>
                                        </div> */}
                                        <br />
                                        

                                        <a href="/finished">
                                        <button className="cart-btn-2" type="submit">결제완료</button></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
                </form>          
            </div>
            <br />
        </div>
    );
}