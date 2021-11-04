import React, {useState, useEffect} from 'react';
import Logo from './Logo';
import Menu from './Menu';
import SideMenu from './SideMenu';
import NavComponent from './NavComponent';

export default function Nav(){

    return(
      
            <div className="container-fluid">
                <div className="row">
                    <Logo />
                    <NavComponent />
                    <SideMenu />
                    {/* <Menu /> */}
                  
                </div>
            </div>
    );
}