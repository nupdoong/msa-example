import React, { useState, useEffect } from 'react';

export default function TabMenu({setCategoryName, categoryName}){

    const [ categoryData, setCategoryData ] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3002/category")
        .then(res => {
            return res.json();
        })
        .then(data => {
            setCategoryData(data);
        })
        //.catch(error => console.log(error))
    },[]);

    const [ select , setSelect ] = useState(true);
    const [ active , setActive ] = useState(false);

    console.log(categoryName);
    const handleClick = (e) => {
        setCategoryName(e.target.value);
        active ? setSelect(true) : setSelect(false);
    }

    console.log("TabMenu15:select:"+select);


  
    return(
        <div className="row mb-5">
            <div className="col-12 col-md-6 offset-md-3 nav nav-tabs justify-content-center" id="nav-tab" role="tablist">
                {
                    categoryData.map(item => (
                        <button 
                        className ={active ? "nav-link active" : "nav-link"} 
                        id="nav-home-tab" 
                        data-bs-toggle="tab" 
                        data-bs-target="#nav-home" 
                        type="button" 
                        role="tab" 
                        aria-controls="nav-home" 
                        aria-selected={select} key={item.id} 
                        value={item.name} 
                        onClick={handleClick}>{item.name}</button>
                    ))
                }
            </div>
        </div>
    );
}