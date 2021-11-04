import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import Bread from '../../elements/ui/Bread';
import CartTable from '../../elements/widgets/carttable/CartTable';
import PaymentMethod from '../../elements/widgets/paymentmethod/PaymentMethod';

import { Fragment } from 'react';
import React, { Component } from 'react';
import Delivery from '../../elements/ui/Delivery';


export default function Payment() {
    
    return(
        <Fragment>
            <Header />
            <Bread productName="Payment" />
            {/* <Delivery /> */}
            <PaymentMethod />
            <Footer />
        </Fragment>
    );
}