import { Fragment, useState, useEffect } from "react";
import {useParams} from 'react-router-dom';
import ColorAndSize from './ColorAndSize';
import AddBuyAndCart from './AddBuyAndCart';
import React, { Component } from 'react';


export default function ProDetRgtMiddle() {

    const { id } = useParams();

    const [ productData, setProductData ] = useState([]);

    useEffect(()=>{
        fetch(`/catalog-service/catalogs/catalog/${id}`)
        .then(res => {
            return res.json();
        })
        .then(data => {
            setProductData(data);
            console.log(data);
        });
    },[]);
    // const [ color, setColor ] = useState("");
    // const [ size, setSize] = useState("");

    // var process = require('../../../../../myProcess.json');

    // useEffect(()=>{
    //     fetch(`http://${process.IP}:${process.PORT}/product/${id}`)
    //     .then(res => {
    //         return res.json();
    //     })
    //     .then(data => {
    //         setVardata(data);
    //         console.log(data.variation);
    //     });
    // },[process.IP, process.PORT, id]);
    
    return (
        <Fragment>
            {/* <ColorAndSize 
                vData = {varData.variation}
                setColor = {setColor}
                setSize = {setSize}
            /> */}
            <AddBuyAndCart 
                productId = {productData.productId}
            /> 
        </Fragment>
    
    );
}