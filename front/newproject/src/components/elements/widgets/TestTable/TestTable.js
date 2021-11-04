import React from 'react';
import {Link} from 'react-router-dom';

export default function WishTable() {

    
    return(
        <div className="cart-main-area pt-90 pb-100">
            <div className="container">
                <h3 className="cart-page-title">Your wishlist items</h3>
                <div className="row">
                    <div className="col-12">
                        <div className="table-content table-responsive cart-table-content">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Product Name</th>
                                        <th>QTY</th>
                                        <th>Unit Price</th>
                                        <th>Add To Cart</th>
                                        <th>action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td className="product-name text-center"><Link to="">Test</Link></td>
                                    <td className="product-quantity">
                                        <div className="cart-plus-minus">
                                            <button className="dec qtybutton">-</button>
                                            <input className="cart-plus-minus-box" type="text" readonly="" value="1" />
                                            <button className="inc qtybutton">+</button>
                                        </div>
                                    </td>
                                    <td className="product-price-cart"><span className="amount old">1000</span><span className="amount">200</span></td>
                                    <td className="product-wishlist-cart"><Link to="">Select option</Link></td>
                                    <td className="product-remove"><button><i className="fa fa-times"></i></button></td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="cart-shiping-update-wrapper">
                            <div className="cart-shiping-update">
                                <a href="/shop-grid-standard">Continue Shopping</a>
                            </div>
                            <div className="cart-clear">
                                 <button>Clear Wishlist</button> 
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}