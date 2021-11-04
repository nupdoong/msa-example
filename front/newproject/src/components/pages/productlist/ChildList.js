import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import Bread from '../../elements/ui/Bread';
import SideBar from '../../elements/widgets/productlist/SideBar';
import Child from '../../elements/widgets/productlist/Child';

import React, {useState} from 'react';
import { useParams } from 'react-router';

export default function ProductList() {
    // const { url } = useParams();
    const [categoryName, setCategoryName] = useState('child');

    return(
        <>
        <Header/>
        <Bread
            productName = "유아"
        />
        <div className="shop-area pt-95 pb-100">
            <div className="container">
                <div className="row">
                    <SideBar 
                        setCategoryName = {setCategoryName}
                    />
                    <Child
                        categoryName = {categoryName}
                    />
                </div>
            </div>
        </div>
        <Footer/>
        </>
    );
}