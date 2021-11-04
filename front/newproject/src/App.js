import React from 'react'; 
import {BrowserRouter, Route, Switch} from "react-router-dom";

import Home from './components/pages/Home/Home';

import Login from './components/pages/login/Login';
import SignUp from './components/pages/myaccount/SignUp';

import Cart from './components/pages/cart/Cart';
import Wishlist from './components/pages/wishlist/Wishlist';
import ProductDetail from './components/pages/ProductDetail/ProductDetail';
import ProductList from './components/pages/productlist/ProductList';
import NovelList from './components/pages/productlist/NovelList';
import ChildList from './components/pages/productlist/ChildList';
import Features from './components/pages/Features/Features';
import MyAccount from './components/pages/myaccount/MyAccount';
import Payment from './components/pages/payment/Payment';
import Finished from './components/pages/finished/Finished';
import Test from './components/pages/Test/Test';
import EditAccout from './components/pages/myaccount/EditAccount';
import UserList from './components/pages/admin/Admin'
import UserOrderList from './components/elements/widgets/product/orderTable/User'
import List from './components/elements/widgets/product/adminProduct/List';
import UpdateList from './components/elements/widgets/product/adminProduct/UpdateList'
import UpdateProduct from './components/elements/widgets/product/adminProduct/UpdateProduct';
import UserOrder from './components/elements/widgets/product/userOrderTable/UserOrder';

import "./assets/css/mystyle.css";
import "./assets/css/style.css";
import "./assets/css/animate.css";
import "./assets/css/bootstrap.css";
import "./assets/css/googlefont.css";
import "./assets/icons8/css/line-awesome.min.css";
import "./assets/css/nav.css";
import "./assets/css/login.css";

import ToTop from "./utilities/ToTop";

 
function App() {

  const token = sessionStorage.getItem('token');

  // if(!token){
  //     return <Home/>
  // }

  return (
    <BrowserRouter>
      <ToTop>
      <Switch>
        
        <Route exact path="/"><Home/></Route>
        <Route exact path="/home"><Home/></Route>

        <Route exact path="/signup"><SignUp/></Route>
        <Route exact path="/login"><Login/></Route>
        <Route exact path="/users"><UserList/></Route>
        <Route exact path="/user/order/:userId/:name"><UserOrderList/></Route>
        <Route exact path="/user/order/:userId"><UserOrder/></Route>

        <Route exact path="/cart"><Cart/></Route>
        <Route exact path="/wishlist"><Wishlist/></Route>
        <Route exact path="/features"><Features/></Route>
        <Route exact path="/productdetail/:id"><ProductDetail/></Route>
        <Route exact path="/productlist"><ProductList/></Route>
        <Route exact path="/productlist/novel/1"><NovelList/></Route>
        <Route exact path="/productlist/children/2"><ChildList/></Route>
        <Route exact path="/myaccount"><MyAccount/></Route>
        <Route exact path="/myaccount/editaccount"><EditAccout/></Route>

        <Route exact path="/management/:url/1"><List/></Route>
        <Route exact path="/management/:url/2"><UpdateList/></Route>
        <Route exact path="/update/:productId"><UpdateProduct/></Route>

        <Route exact path="/payment/:count/:productId/:userId"><Payment/></Route>
        <Route exact path="/finished"><Finished/></Route>


        <Route exact path="/test"><Test/></Route>

      </Switch>
      </ToTop>
    </BrowserRouter>
  );
}

export default App;
