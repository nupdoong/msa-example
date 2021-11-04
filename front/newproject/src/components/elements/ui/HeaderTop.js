import React, { Component, useEffect, useState } from 'react';


export default function HeaderTop(){
    const [isLogged, setIsLogged] = useState(null);
    
    useEffect(() => {
        if((sessionStorage.getItem('token') === undefined) || (sessionStorage.getItem('token') == null)){
            setIsLogged(false)
        }
        else{
            setIsLogged(true)
        }
    })

    const Logout = e => {
        e.preventDefault();
        if(isLogged === true){
            setIsLogged(false)
            window.sessionStorage.clear()
        }
    }
    
    return (
        <div className="header-padding-1 d-none d-lg-block header-top-area">
            <div className="container-fluid">
                <div className="header-top-wap">
                    <div className="language-currency-wrap">
                        {/* <div className="same-language-currency language-style">
                            <span>English <i className="fa fa-angle-down"></i></span>
                            <div className="lang-car-dropdown">
                                <ul>
                                    <li><button value="en">English</button></li>
                                    <li><button value="fn">French</button></li>
                                    <li><button value="de">Germany</button></li>
                                </ul>
                            </div>
                        </div> */}
                        <div className="same-language-currency use-style">
                            <span>WON <i className="fa fa-angle-down"></i></span>
                            <div className="lang-car-dropdown">
                                <ul>
                                    <li><button value="USD">WON</button></li>
                                    <li><button value="EUR">EUR</button></li>
                                    <li><button value="GBP">USD</button></li>
                                </ul>
                            </div>
                        </div>
                        <div className="header-offer">
                            {
                                isLogged ? (
                                    <p>어서오세요! <span> {sessionStorage.getItem('email')} </span> 님! </p>
                                ) : (
                                    <p>로그인 하세요!</p>
                                )
                            }
                        </div>
                    </div>

                <div>  
                    
            <ul>
                <a href="/signup">
                    <button type="button" class="btn btn-outline-success">SIGN UP</button>
                </a>
                &nbsp;&nbsp;&nbsp;
                <a href="/login">
                    <button type="button" class="btn btn-outline-success">LOGIN</button>
                </a>
                &nbsp;&nbsp;&nbsp;
                <a href="/">
                    <button type="button" class="btn btn-outline-success" onClick={Logout}>LOGOUT</button>
                </a>
            </ul>
           </div>  
        


                </div>
            </div>
        </div>
    );
}