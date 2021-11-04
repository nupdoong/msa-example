import axios from 'axios';
import React,  {useEffect, useState} from 'react';
import { useParams } from 'react-router';
import ProductView from '../product/ProductView';
import Pagination from "../productlist/Pagination"

export default function Child({categoryName}) {
    // const {cateNo} = useParams();
    const [sliceNumber, setSliceNumber] = useState(6);
    const [columNumber, setColumNumber] = useState(0);
    const [onActive, setOnActive] = useState(true);

    const [posts, setPosts] = useState([]);
	const [currentPage, setCurrentPage] = useState(1); 
	const [postsPerPage] = useState(6); 
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const handleLayout = (sln, coln) => {
        setSliceNumber(sln)
        setColumNumber(coln)
        setOnActive(!onActive)
    }
    console.log("Child: ")
    console.log(posts)
    //페이징 처리
    useEffect(()=>{
        const fetchPosts = async() => {
            await axios.get(`/catalog-service/catalogs/cate/${2}`)
            .then(data => {
                setPosts(data.data)
                // console.log("Shop: ")
                // console.log(data.data)
            })
            .catch(error => console.log(error))
        }
        fetchPosts();
    },[])
    // console.log("Posts: ")
    // console.log(posts)
    //indexOfLastPost는 해당 페이지에서 마지막 post의 index 번호를 가르킵니다.
    const indexOfLastPost = currentPage * postsPerPage;
    //indexOfFirstPost는 해당 페이지에서 첫번째 post의 index 번호를 가르킵니다.
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    //currentPosts는 각 페이지에서 보여질 포스트 배열입니다.
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
    

    return(
        <div className="col-lg-9 order-1 order-lg-2">
            <div className="shop-top-bar mb-35">
                <div className="select-shoing-wrap">
                    {/* <div className="shop-select">
                        <select>
                            <option value="default">Default</option>
                            <option value="priceHighToLow">Price - High to Low</option>
                            <option value="priceLowToHigh">Price - Low to High</option>
                        </select>
                    </div> */}
                    {/* <p>Showing 1 of 144 result</p> */}
                </div>
                <div className="shop-tab">
                    <button className={ onActive ? "active" : ""} onClick={()=> onActive ? "" : handleLayout(6,6)}><i className="fa fa-th-large"></i></button>
                    <button className={ onActive ? "" : "active"} onClick={()=> onActive ? handleLayout(6,4) : ""}><i className="fa fa-th"></i></button>
                    {/*<button className=""><i className="fa fa-list-ul"></i></button>*/}
                </div>
            </div>
            <div className="shop-bottom-area mt-35">
                <div className="row grid three-column">
                    <p>{categoryName}</p>
                    <ProductView 
                        sliceNumber = {sliceNumber}
                        columNumber = {columNumber}
                        categoryName = {categoryName}
                        posts={currentPosts}
                        cateNo={2}
                    />
                    
                    
                </div>
            </div>   
            <div>
                <Pagination postsPerPage={postsPerPage} 
                            totalPosts={posts.length} 
                            paginate={paginate}/>
            </div>
            
            {/* <div className="pro-pagination-style text-center mt-30">
                <ul className="mb-0 mt-0">
                    <li className="page-item active"><button className="page-link">1</button></li>
                    <li className="page-item null"><button className="page-link">2</button></li>
                    <li className="page-item null"><button className="page-link">3</button></li>
                    <li className="page-item null"><button className="page-link">4</button></li>
                    <li className="page-item null"><button className="page-link">5</button></li>
                    <li className="page-item null"><button className="page-link">6</button></li>
                    <li className="page-item null"><button className="page-link">7</button></li>
                    <li className="page-item"><button className="page-link">»</button></li>
                    <li className="page-item null"><button className="page-link">10</button></li>
                </ul>
            </div> */}
        </div>
    );
}