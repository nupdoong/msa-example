import Header from '../../../../layout/Header';
import Footer from '../../../../layout/Footer';
import Bread from '../../../ui/Bread';
import EnrollProduct from '../adminProduct/EnrollProduct';
import { Fragment } from 'react';
import React, { Component } from 'react';

export default function List(){
    return(
        <Fragment>
            <Header/>
            <Bread productName ="상품 등록" />
            <EnrollProduct />
            <Footer/>
        </Fragment>
    );
}