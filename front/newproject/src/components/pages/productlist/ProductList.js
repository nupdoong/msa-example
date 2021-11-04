import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import Bread from '../../elements/ui/Bread';
import SideBar from '../../elements/widgets/productlist/SideBar';
import Shop from '../../elements/widgets/productlist/Shop';
import axios from 'axios';

import React, {useState, useEffect} from 'react';

export default function ProductList() {

    const [categoryName, setCategoryName] = useState("전체");

    // useEffect(()=>{
    //     const fetchPosts = async() => {
    //         await axios.get("/catalog-service/catalogs")
    //         .then(data => {
    //             setPosts(data.data)
    //             console.log("Shop: ")
    //             console.log(data.data)
    //         })
    //         .catch(error => console.log(error))
    //     }
    //     fetchPosts();
    // },[])

    return(
        <>
        <Header/>
        <Bread
            productName = "All"
        />
        <div className="shop-area pt-95 pb-100">
            <div className="container">
                <div className="row">
                    <SideBar 
                        setCategoryName = {setCategoryName}
                    />
                    <Shop
                        categoryName = {categoryName}
                    />
                </div>
            </div>
        </div>
        <Footer/>
        </>
    );
}