
import { useEffect, useState } from "react";
import {  Outlet, useLoaderData } from "react-router-dom";


import HeadHome from "../HeadHome/HeadHome";
import TabList from "../TabList/TabList";



const Gadgets = () => {


    // console.log(items)
    // const { product_id, availability, category, description, price, product_image,
    //     product_title, rating, release_date, specification } = items

    const [Category, setCategory] = useState([])
    useEffect(() => {
        fetch('../Category.json')
            .then(res => res.json())
            .then(data => setCategory(data))
    }, [])

    console.log(Category)
   
   
    return (
        <div className="mt-[400px] max-w-7xl mx-auto  ">
            <div className="text-center  my-6">
            <HeadHome></HeadHome>
            </div>
            <div className="flex justify-between">
            <div className=" w-[15%] h-[12%]">
            <TabList Category={Category}></TabList>
            </div>

               <div className=" w-[80%]
               ">
                <Outlet></Outlet>
              </div>
            </div>
          
            
        </div>
    );
};

export default Gadgets;