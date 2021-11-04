import { Fragment } from "react";
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import Bread from '../../elements/ui/Bread';
import MyAccountForm from "./MyAccountForm";
import UserInfo from "../../elements/ui/UserInfo";
import React, { Component } from 'react';
import Login from "../login/Login";


export default function MyAccount() {
    const token = sessionStorage.getItem('token');

    if(!token){
        return <Login/>
    }

    return(
        <Fragment>
            <Header />
            <Bread productName = "My Account"/>
            <UserInfo />
            <MyAccountForm />
            <Footer />
        </Fragment>
    );
}