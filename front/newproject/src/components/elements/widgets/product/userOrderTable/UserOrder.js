import Header from '../../../../layout/Header';
import Footer from '../../../../layout/Footer';
import Bread from '../../../ui/Bread';
import OrderTable from './OrderTable';
import { Fragment } from 'react';
import React, { Component } from 'react';
import { useParams } from 'react-router';

export default function UserOrder(){
    const {userId} = useParams();
    

    return(
        <Fragment>
            <Header/>
            <Bread productName ="User Order List" />
            <OrderTable userId={userId}/>
            <Footer/>
        </Fragment>
    );
}