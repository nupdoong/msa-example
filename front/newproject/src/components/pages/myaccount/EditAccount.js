import React, { Component, useState, useEffect } from 'react';
import axios from 'axios'
import { useHistory } from "react-router";

export default function EditAccout() {
    const history = useHistory();
    const [usersDatas, setUsersDatas] = useState([]);
    const [values, setValues] = useState({
        name: '',
        zipcode: '',
        address1: '',
        address2: '',
        wallet: ''
    })
    useEffect(()=>{
        axios({
            method: 'GET',
            url: `/user-service/users/${sessionStorage.userId}`,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${sessionStorage.token}`
            }
        })
        .then(res => {
            setUsersDatas(res.data)
            console.log(res.data);
        })
        .catch(res => { 
            console.log(res) 
        })
    },[]);

    const handleChangeForm = (e) => {
        setValues({ 
            ...values, 
            [e.target.name]: e.target.value 
        });
    }

    const handlePutUserForm = (e) => {
        e.preventDefault()

        axios.put(`/user-service/users/${sessionStorage.userId}/${usersDatas.id}`, {
            name: values.name,
            zipcode: values.zipcode,
            address1: values.address1,
            address2: values.address2,
            wallet: values.wallet
            
        })
        .then(res=>{
            console.log(res)
            history.push('/myaccount')
        })
        .catch(res=>{
            console.log(res)
        })
    }
    
    return(

        <div className="card-body">
            <div className="myaccount-info-wrapper">
                <div className="account-info-wrapper">
                    <h4>My Account Information</h4>
                    <h5>Your Personal Details</h5>
                </div>
                <form onSubmit={handlePutUserForm}>
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="billing-info">
                                <label>NAME</label>
                                <input type="text" 
                                        placeholder={usersDatas.name} 
                                        name="name" 
                                        value={values.name} 
                                        onChange={handleChangeForm}/>
                            </div>
                        </div>
                        <div className="col-lg-12 col-md-6">
                            <div className="billing-info">
                                <label>ZIPCODE</label>
                                <input type="text" 
                                        placeholder={usersDatas.zipcode} 
                                        name="zipcode" 
                                        value={values.zipcode} 
                                        onChange={handleChangeForm}/>
                            </div>
                        </div>
                        <div className="col-lg-12 col-md-6">
                            <div className="billing-info">
                                <label>ADDRESS</label>
                                <input type="text" 
                                        placeholder={usersDatas.address1} 
                                        name="address1" 
                                        value={values.address1} 
                                        onChange={handleChangeForm}/>
                            </div>
                        </div>
                        <div className="col-lg-12 col-md-6">
                            <div className="billing-info">
                                <label>ADDRESS DETAIL</label>
                                <input type="text" 
                                        placeholder={usersDatas.address2} 
                                        name="address2" 
                                        value={values.address2} 
                                        onChange={handleChangeForm}/>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="billing-info">
                                <label>WALLET</label>
                                <input type="number" 
                                        placeholder={usersDatas.wallet} 
                                        name="wallet" 
                                        value={values.wallet} 
                                        onChange={handleChangeForm}/>
                            </div>
                        </div>
                    </div>
                    <div className="billing-back-btn">
                        <div className="billing-btn">
                            <button type="submit">UPDATE</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );

}