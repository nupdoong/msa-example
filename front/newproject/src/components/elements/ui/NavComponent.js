import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';

export default function NavComponent() {

    const [cateData, setCateData] = useState([]);
    const [admin, setAdmin] = useState([]);
    const list = [
        {
            title: '상품 등록',
            url: 'enroll',
            id: 1
        },
        {
            title: '상품 수정/삭제',
            url: 'update',
            id: 2
        }
    ]

    useEffect(() => {
        const fetch = async() => {
        await axios.get("/catalog-service/categories")
        .then(data => {
            setCateData(data.data)
            console.log(data.data)
        })
        .catch(error => console.log(error))
        }
        fetch();
        fetchUser();
    }, []);

    const fetchUser = async () =>{
        await axios.get(`/user-service/users/${sessionStorage.userId}`,{
            headers: {
                Authorization: `Bearer ${sessionStorage.token}`
            }
        })
        .then(data=>{
            setAdmin(data.data.admin)
            console.log(data.data.admin)
        })
        .catch(error => console.log(error))
    }
    

    // useEffect(()=>{
        
    // },[]);
    // 함수 한번만 수행해
    return (
        <div className="col-xl-8 col-lg-8 d-none d-lg-block">
            <div className=" main-menu ">
                <nav>
                    <li>
                        <ul>
                            <li className="px-4"><a href="/">Home</a></li>                            
                            <li className="px-4">
                                <Link to="/productlist">Category<i className="fa fa-angle-down"></i></Link>
                                <ul className="mega-menu">
                                    <li>
                                        <ul>
                                            {cateData &&
                                                cateData.map(item => (
                                                    <li key={item.cateNo}>
                                                        <Link to={`${item.url}/${item.cateNo}`}>
                                                             {item.cateName}
                                                         </Link>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </li>
                                </ul>                       
                            </li>
                            <li className="px-4"><Link to="/wishlist">WishList</Link></li>
                            <li className="px-4"><Link to={`/user/order/${sessionStorage.userId}`}>OrderList</Link></li>
                            <li className="px-4"><Link to="/myaccount">MyAccount</Link></li>
                            {admin === 1 && 
                                <div className="container">
                                    <li className="px-4"><Link to="/users">UserList</Link></li>
                                    <li className="px-4">
                                        Management<i className="fa fa-angle-down"></i>
                                        <ul className="mega-menu">
                                            <li>
                                                <ul>
                                                    {
                                                        list.map((item, index) => (
                                                            <li key={index}>
                                                                <Link to={`/management/${item.url}/${item.id}`}>
                                                                    {item.title}
                                                                </Link>
                                                            </li>
                                                        ))
                                                    }
                                                </ul>
                                            </li>
                                        </ul>                       
                                    </li>
                                </div>
                            }
                            
                            {/* {menuList} */}
                        </ul>
                    </li>
                </nav>
            </div>
        </div>
    );
}