import HeaderTop from '../elements/ui/HeaderTop';
import Nav from '../elements/ui/Nav';

import React, { Component } from 'react';


export default function Header(){
    return (
        <header className="header-area clearfix">
            <HeaderTop/>
            <Nav/>
        </header>
    );
}