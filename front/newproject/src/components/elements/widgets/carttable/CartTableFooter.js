import React, { Component } from 'react';

export default function CartTableFooter() {
    return(
        <div className="col-12">
        <div className="row">

<div className="d-flex justify-content-center">

       <div className="col-lg-8">
                <div className="grand-totall">
                                                

                    <div className="title-wrap">
                        <h4 className="cart-bottom-title section-bg-gary-cart">Cart Total</h4>
                           
                    <h5>Total products <span>$73.13</span></h5>
                    <h4 className="grand-totall-title">Grand Total <span>$73.13</span></h4>
                       </div>
                    <div className="d-flex justify-content-center">

                  
                    <a href="/payment">결제하기</a>
                  </div>
                </div>
                </div>
            </div>
            </div>
  

        </div>
        
    );
}