import React, { Component } from 'react';


export default function MyAccount() {

    return(
        <div>
            <h3>{sessionStorage.getItem('email')} 님의 정보 수정</h3>
            <p>image</p>
        </div>
    );
}