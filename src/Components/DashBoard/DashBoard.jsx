
import { useLoaderData } from "react-router-dom";

import { createContext, useEffect, useState } from "react";
import { getStoredItems } from "../../Java/Utility";
import Items from "../Items/Items";


const PriceTotal=createContext(0)
  

const DashBoard = () => {

    const MainProductData = useLoaderData()

   



    const [list, setList] = useState([])
  

    useEffect(() => {
        const StoredList = getStoredItems()


        const AddLists = MainProductData.filter(item => StoredList.includes(item.product_id))

        setList(AddLists)



    }, [])

    const [cart, setCart] = useState(Boolean)

    const [WhishList, setWhishList] = useState(Boolean)

    const handleCartItems = (status) => {
        setWhishList(false);
        setCart(status);


    }

    const handleWishItems = (status) => {
        setCart(false);
        setWhishList(status);

    }

    return (
        <div>
            <div className="bg-purple-700 hero pb-32 ">

                <div className="hero-content text-center">
                    <div >
                        <h1 className="text-4xl font-bold">Dashboard</h1>
                        <p className="py-6">
                            Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                        </p>
                        <div className='space-x-3'>
                            <button className="border border-slate-600 bg-white w-40 px-8 py-4 rounded-full
                    text-black
                    " onClick={() => handleCartItems(true)}>cart</button>
                            <button className="border border-slate-600 bg-white w-40  px-8 py-4 rounded-full
                    text-black
                    " onClick={() => handleWishItems(true)}>WhishList</button>
                        </div>
                    </div>


                </div>

            </div>


            <div className='flex justify-between mt-2 mx-4'>
                <div><p className='font-bold'>Cart</p></div>
                <div className="flex justify-center items-center ">
                    <p className="font-bold">Total Cost: {


                    }</p>
                    <button className='btn bg-violet-600 rounded-full text-white'>Short by price</button>
                    <button className='btn bg-violet-600 text-white rounded-full'>Purchase</button>

                </div>
            </div>

            {
                cart ?

                    list.map(i => <Items key={i.product_id} i={i}></Items>)


                    : 'hello'
            }





        </div>
    );
};

export default DashBoard;