import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import Bread from '../../elements/ui/Bread';
import UserTable from '../../elements/widgets/wishtable/UserTable';
import { Fragment } from 'react';
import React, { Component } from 'react';


export default function Admin(){
    return(
        <Fragment>
            <Header/>
            <Bread productName ="User List" />
            <UserTable />
            <Footer/>
        </Fragment>
    );
}