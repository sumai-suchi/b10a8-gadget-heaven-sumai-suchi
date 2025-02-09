
import { useLoaderData, useNavigate } from "react-router-dom";

import {  useContext, useEffect, useState } from "react";
import { getStoredItems } from "../../Java/Utility";
import Items from "../Items/Items";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Item from "../Item/Item";
import Swal from "sweetalert2";



  

const DashBoard = () => {
    const {wish,MainProductData}=useContext(AuthContext)
    console.log(MainProductData)
    console.log(wish)
  
    const navigate=useNavigate()
   
    
    const [wishItems,setWishItems]=useState([])
   useEffect(()=>
    {
        if(wish)
            {
                const WishListTo= MainProductData?.filter(item=> wish?.includes(item.product_id))
                setWishItems(WishListTo)
            }
        
    },[wish,MainProductData])


    const [list, setList] = useState([])
   
    const [totalPrice,setTotalPrice]=useState(0)
    
    const [purchase,setPurchase]=useState(false)
    console.log(purchase)
    useEffect(() => {
        const StoredList = getStoredItems()


        const AddLists = MainProductData.filter(item => StoredList.includes(item.product_id))

        setList(AddLists)



    }, [])

    useEffect(()=>
        {
            let total=0;
            for(let i=0;i<list.length;i++)
                {
                    total+=Math.ceil(list[i].price)
                }

                setTotalPrice(total)
        },[list])




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

  
            const handlePrizeSorting=()=>
                {
                  const sortedList= [...list].sort((a,b)=> b.price - a.price);
                    setList(sortedList)
                    console.log(list)
                }

       const handlePurchase=()=>
        {
            Swal.fire({
                title: `PayMent Successfully! `,
                text:`thanks for purchasing.Total amount:${totalPrice}`,
                icon: "success",
                draggable: true
              }).then((result)=>{
                if(result.isConfirmed)
                {
                    setTotalPrice(0)
                    navigate('/')
                  
                }
              });

              
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
                <div><p className='font-bold'></p></div>
                <div className="flex justify-center items-center ">
                    <p className="font-bold">Total Cost:  {

                     totalPrice
                    }</p>
                    <button className='btn bg-violet-600 rounded-full text-white' onClick={handlePrizeSorting}>Short by price</button>
                    <button className='btn bg-violet-600 text-white rounded-full' onClick={handlePurchase}>Purchase</button>

                </div>
            </div>

            {
                cart ?

                    list.map(i => <Items key={i.product_id} i={i}></Items>)


                    : ''
            }
         
         {
           WhishList ?  wishItems?.map(w=> <Item key={w.product_id} w={w}></Item>) 
            :' ' 
         }

          
          {/* {
            purchase && <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
              <h3 className="font-bold text-lg">Hello!</h3>
              <p className="py-4">Press ESC key or click the button below to close</p>
              <div className="modal-action">
                <form method="dialog">
                  if there is a button in form, it will close the modal
                  <button className="btn">Close</button>
                </form>
              </div>
            </div>
          </dialog>
          } */}


        </div>
    );
};

export default DashBoard;