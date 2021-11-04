import React, {useState, useEffect} from 'react';
import { useHistory } from "react-router";
import {Link} from 'react-router-dom';
import axios from 'axios';
import Pagination from './Pagination'

export default function UserTable(){
    const history = useHistory();

    const [userDatas, setUserDatas] = useState([]);
	const [currentPage, setCurrentPage] = useState(1); 
	const [postsPerPage] = useState(5); 
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const fetchItem = async () =>{
        await axios.get(`/user-service/users`,{
            headers: {
                Authorization: `Bearer ${sessionStorage.token}`
            }
        })
        .then(data=>{
            setUserDatas(data.data)
            console.log(data.data)
        })
        .catch(error => console.log(error))
    }

    useEffect(()=>{
        fetchItem();
    },[]);

    const handleDelete = (id, email) => {
        axios.delete(`/user-service/users/${id}`,{
            data: {
                email: email
            }      
        })
        .then(data=>{
            alert("유저 삭제")
            // setWishDatas(data.data)
            console.log(data.data)
            fetchItem(); 
        })
        .catch(error => console.log(error))   
    }

     //indexOfLastPost는 해당 페이지에서 마지막 post의 index 번호를 가르킵니다.
     const indexOfLastPost = currentPage * postsPerPage;
     //indexOfFirstPost는 해당 페이지에서 첫번째 post의 index 번호를 가르킵니다.
     const indexOfFirstPost = indexOfLastPost - postsPerPage;
     //currentPosts는 각 페이지에서 보여질 포스트 배열입니다.
     const currentPosts = userDatas.slice(indexOfFirstPost, indexOfLastPost);

    // const handleAllDelete = (e) => {
    //     alert(wishIdDatas);
    //     fetch(`http://${process.IP}:${process.PORT}/wish/${wishIds}`,{
    //             method: "DELETE"
    //     })
        
    //     wishIdDatas.map(item => (
    //         fetch(`http://${process.IP}:${process.PORT}/wish/${item}`,{
    //             method: "DELETE"
    //         })
    //     )).then(
    //         alert("all delete"),
    //         setWishDatas([]),
    //         history.push(`/`)

    //         fetch(`http://${process.IP}:${process.PORT}/wish`)
    //         .then(
    //             res => {
    //             return res&&res.json();
    //         })
    //         .then(data => {
    //             data ? setWishDatas(data) : alert("nodata");
    //         })
    //     )

    // }

    
    // : 
    //     <tr>
    //     <td className="product-thumbnail">a</td>
    //     <td className="product-name text-center">a</td>
    //     <td className="product-price-cart">a</td>
    //     <td className="product-wishlist-cart">a</td>
    //     <td className="product-remove">a</td>
    //     </tr>

    return(
        <div className="cart-main-area pt-90 pb-100">
            <div className="container">
                <h3 className="cart-page-title">User List</h3>
                <div className="row">
                    <div className="col-12">
                        <div className="table-content table-responsive cart-table-content">
                            <table>
                                <thead>
                                    <tr>
                                        <th>EMAIL</th>
                                        <th>Name</th>
                                        <th>ADDRESS</th>
                                        <th>ADDRESS DETAIL</th>
                                        <th>wallet</th>
                                        <th>detail</th>
                                        <th>action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {currentPosts && currentPosts.map((user, idx) => (
                                            // <span className="amount">{(item.price * ((100+item.discount)/100)).toFixed(2)}</span>
                                            <tr key={idx}>
                                                <td className="product-thumbnail">{user.email}</td>
                                                <td className="product-name text-center">{user.name}</td>
                                                <td className="product-name text-center"><span className="amount">{user.address1}</span></td>
                                                <td className="product-name text-center"><span className="amount">{user.address2}</span></td>
                                                <td className="product-name text-center"><span className="amount">{user.wallet}</span></td>
                                                <td className="product-wishlist-cart"><Link to={`/user/order/${user.userId}/${user.name}`}>Order List</Link></td>
                                                <td className="product-remove"><button onClick={()=>handleDelete(user.id, user.email)}><i className="fa fa-times"></i></button></td>
                                            </tr>

                                        )) 
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Pagination postsPerPage={postsPerPage} 
                            totalPosts={userDatas.length} 
                            paginate={paginate}/>
            </div>
        </div>
    );
}