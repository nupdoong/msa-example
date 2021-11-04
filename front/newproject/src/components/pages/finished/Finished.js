import React, { Fragment } from 'react';

import Header from '../../layout/Header';
import Footer from '../../layout/Footer';


export default function Finished() {

    return (
        <Fragment>
            <Header />
            <div>
            <div className="tax-wrapper ">
                    <div className="tax-select-wrapper">

                        <br />
                        <div className="row justify-content-md-center">
                            <div className=" col-md-6">
                                <div className="cart-tax">
                                    <div className="d-flex justify-content-center">
                                        <h3><b>결제 완료</b></h3>
                                    </div>

                                    <div className="title-wrap">
                                        <br />
                                        <div className="d-flex justify-content-center">

                                            <h4>The New Book Store를 이용해주셔서 감사합니다.</h4>
                                            <br />
                                        </div>
                                        <br />
                                        <div className="d-flex justify-content-center">
                                            <br />
                                            <h3>고객님,<span className="text-danger"> 주문이 완료</span>되었습니다.</h3>
                                        </div>
                                        <br />

                                        <div className="d-flex justify-content-center">
                                            <h4 className="text-danger"><b>주문번호: 000000000</b></h4>
                                            <br />
                                        </div>
                                    </div>
                                    <br />

                                <div className="d-flex justify-content-center">
                                    <a href="/">
                                        <button type="button" class="btn btn-info">홈 이동</button>
                                    </a>
                                </div>
                                <div className="d-flex justify-content-center">
                                    <a href="/productlist">
                                        <button type="button" class="btn btn-info">Category</button>
                                    </a></div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <br />

            </div>

            <Footer />
        </Fragment>
    );
}