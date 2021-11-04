import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import Bread from '../../elements/ui/Bread';
import SideBar from '../../elements/widgets/productlist/SideBar';
import Novel from '../../elements/widgets/productlist/Novel';

import React, {useState} from 'react';
import { useParams } from 'react-router';

export default function ProductList() {
    // const { url } = useParams();
    const [categoryName, setCategoryName] = useState('novel');

    return(
        <>
        <Header/>
        <Bread
            productName = "소설"
        />
        <div className="shop-area pt-95 pb-100">
            <div className="container">
                <div className="row">
                    <SideBar 
                        setCategoryName = {setCategoryName}
                    />
                    <Novel
                        categoryName = {categoryName}
                    />
                </div>
            </div>
        </div>
        <Footer/>
        </>
    );
}