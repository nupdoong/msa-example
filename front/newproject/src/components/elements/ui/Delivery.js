import React, { Component, useState, useEffect } from 'react';
import axios from 'axios';

export default function Delivery() {
    const [userDatas, setUserDatas] = useState([])

    const fetchItem = async () =>{
        await axios.get(`/user-service/users/${sessionStorage.userId}`,{
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

    useEffect(()=>{
        fetchItem();
    },[]);

    return (
        <div>

            <div className="tax-wrapper ">
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
                                            <input type="text" placeholder={userDatas.zipcode}/>
                                        </div>
                                        <div className="tax-select">
                                            <label>* 주소</label>
                                            <input type="text" placeholder={userDatas.address1}/>
                                        </div>
                                        <div className="tax-select">
                                            <label>* 상세주소</label>
                                            <input type="text" placeholder={userDatas.address2}/>
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
                </div>
            </div>
        </div>
    );
}