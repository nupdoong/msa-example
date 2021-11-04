import Header from '../../../../layout/Header';
import Footer from '../../../../layout/Footer';
import Bread from '../../../ui/Bread';
import UserOrderTable from '../orderTable/UserOrderTable';
import { Fragment } from 'react';
import React, { Component } from 'react';
import { useParams } from 'react-router';

export default function User(){
    const {userId} = useParams();
    const {name} = useParams();

    return(
        <Fragment>
            <Header/>
            <Bread productName ="User Order List" />
            <UserOrderTable userId={userId} 
                            name={name}/>
            <Footer/>
        </Fragment>
    );
}