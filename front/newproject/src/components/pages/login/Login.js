
import React, { Component, useState } from 'react';
import Logo from "../../elements/ui/Logo"
import swal from 'sweetalert'
import { TextField } from '@material-ui/core';
import { Link, Route } from 'react-router-dom';
import HeaderTop from "../../elements/ui/HeaderTop"
// eslint-disable-next-line
async function loginUser(credentials) {
    console.log(credentials);
    return await fetch(`user-service/login`, {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json; charset=utf-8',
        },
        body: JSON.stringify(credentials)       
    })
    .then(res => {
        // console.log(res.headers)
        if(res.status === 200){
            console.log(res.headers.get('token'));
            console.log(res.headers.get('userId'));
            sessionStorage.setItem('token', res.headers.get('token'))
            sessionStorage.setItem('userId', res.headers.get('userId'))
            sessionStorage.setItem('email', res.headers.get('email'))
            swal("Success", "success", {
                buttons: true,
                timer: 6000
            })
            .then(() => {
                window.location.href = '/'
            })
        }
        else if(res.status === 401){
            swal("No Authorization", {
                buttons: true,
                timer: 6000
            })
            .then(
                window.location.href = '/login'
            )
            
        }
        else{
            swal("Faild", {
                buttons: true,
                timer: 6000
            })
            .then(
                window.location.href = '/login'
            ) 
        }
    });
    
}

export default function Login() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    // const [value, setValue] = useState({
    //     email: '',
    //     password: ''
    // });

    // const printValues = e => {
    //     e.preventDefault();
    //     console.log(value.email, value.password);
    // };

    // const updateField = e => {
    //     setValue({
    //         ...value,
    //         [e.target.name]: e.target.value
    //     });
    // };

    const handleSubmit = e => {
        e.preventDefault();
        const response = loginUser({
            email,
            password
        });
        // let result = response.then((res)=>console.log(res));
        // console.log("response"+result);
        // if('token' in result){
            
        //     // swal("Success",{
        //     //     buttons: false,
        //     //     timer: 2000,
        //     // })
        //     .then((value) => {
        //         localStorage.setItem('token', result['token']);
        //         localStorage.setItem('userId', JSON.stringify(result['userId']));
        //         window.location.href = "/"
        //     });
        // }
        // else{
        //     swal("Failed", result.message, "error");
        // }
    }

    return(
        
        <div>
            {/* <header className="header-area clearfix">
                <HeaderTop/>
            </header> */}
        <div id="login">
<br/>  
<br/>       

 <div class="container">
            <div id="login-row" className="row justify-content-center align-items-center">
                <div id="login-column" className="col-md-6">
                    <div id="login-box" className="col-md-12">

                        <div class="d-flex justify-content-center">
                        <Logo />
                        </div>

                        <br/>

                        <form id="login-form" className="form" onSubmit={handleSubmit}>
                            <h3 className="text-center text-info">Login</h3>
                            <div className="form-group">
                                <label for="username" className="text-info">E-mail:</label><br/>
                                <TextField name="email" id="email" className="form-control"
                                onChange={e => setEmail(e.target.value)}></TextField>
                            </div>
                            <div class="form-group">
                                <label for="password" className="text-info">Password:</label><br/>
                                <TextField type="password" name="password" id="password" className="form-control"
                                onChange={e => setPassword(e.target.value)}></TextField>
                            </div>
                            <div class="form-group">
                                {/* <label for="remember-me" class="text-info"><span>Remember me</span> <span><input id="remember-me" name="remember-me" type="checkbox"></input></span></label><br/> */}
                                {/* <a href="/" class="text-info"> */}
                                <button type="submit" name="submit" className="btn btn-info btn-md" value="Submit">LOGIN</button>
                                {/* </a> */}
                            </div>
                            <div id="register-link" className="text-right">
                                <a href="/signup" className="text-info">Sign up here</a>
                            </div>
                            {/* <div id="register-link" className="text-right">
                                <a href="/signup">
                                    <button type="button" className="text-info">SIGN UP</button>
                                </a>
                            </div>  */}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    </div>
    );
}
