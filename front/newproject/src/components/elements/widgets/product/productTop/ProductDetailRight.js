import React, { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import ProDetRgtTop from './ProDetRgtTop';
import ProDetRgtMiddle from './ProDetRgtMiddle';
import ProDetRgtBottom from './ProDetRgtBottom';

export default function ProductDetailRight({productId, productName, detail, unitPrice}) {

    const { id } = useParams();

    const [ datas, setDatas ] = useState([]);

    // useEffect(()=>{
    //     fetch(`http://${process.IP}:${process.PORT}/product/${id}`)
    //     .then(res => {
    //         return res.json();
    //     })
    //     .then(data => {
    //         setDatas(data);
    //         console.log(data);
    //     });
    // },[process.IP, process.PORT, id]);
    
    return (
        <div className="col-lg-6 col-md-6">
            <div className="product-details-content ml-70">

                <ProDetRgtTop 
                    productId = {productId}
                    productName = {productName}
                    detail = {detail}
                    unitPrice = {unitPrice}
                />
                <ProDetRgtMiddle 
                    productId = {productId}/>
                {/* <ProDetRgtBottom /> */}

            </div>
        </div>
    );
}