import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Menu() {
    return(
<div class="wrapper">
    <nav id="sidebar">
        <div class="sidebar-header">
        </div>

        <ul class="list-unstyled components">
            <li class="active">
                <div data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">전체 카테고리</div>
                <ul class="collapse list-unstyled" id="homeSubmenu">
                    <li>
                        <a href="/productlist/nonfiction">소설</a>
                    </li>
                    <li>
                        <a href="/productlist/children">유아</a>
                    </li>
                    <li>
                        <a href="/productlist/humanities">인문</a>
                    </li>
                    <li>
                        <a href="/productlist/science">과학</a>
                    </li>
                    <li>
                        <a href="/productlist/study">수험</a>
                    </li>
                    <li>
                        <a href="/productlist/cartoon">만화</a>
                    </li>
                </ul>
            </li>
            <li>
                <a href="/wishlist">장바구니</a>
            </li>

            <li>
                <a href="/cart">주문목록</a>
            </li>

            <li>
                <a href="/myaccount">마이페이지</a>
            </li>

            <li>
            <a href="/admin">
            <button type="button" class="btn btn-outline-success">관리자 페이지</button>
            </a>
            </li>
        </ul>

    </nav>
</div>
    );

}



// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';

// export default function Menu(){

//     const [ menuData, setMenuData ] = useState([]);

//     useEffect(() => {
//         fetch("http://localhost:3005/menu")
//         .then(res => {
//             return res.json();
//         })
//         .then(data => {
//             setMenuData(data);
//         })
//         //.catch(error => console.log(error))
//     },[]);

//     const menuList = menuData.map(item => {
//         if (item.children) {
//             return(
//                 <li key={item.id} className="px-4">
//                     <Link to={item.url}>{item.name}<i className="fa fa-angle-down"></i></Link>
//                     <ul className="mega-menu">
//                         <li>
//                             <ul>
//                                 {item.children.map(subitem => (
//                                     <li key={subitem.id}><Link to ={subitem.url}>{subitem.name}</Link></li>
//                                 ))}
//                             </ul>
//                         </li>
//                     </ul>
//                 </li>
//             );
//         } else {
//             return(
//                 <li key={item.id} className="px-4"><Link to={item.url}>{item.name}</Link></li>
//             );
//         }
//     });
    
//     return(
//         <div className="col-xl-8 col-lg-8 d-none d-lg-block">
//             <div className=" main-menu  ">
//                 <nav>
//                     <ul>
//                         {menuList}
//                     </ul>
//                 </nav>
//             </div>
//         </div>

//     );
// }

