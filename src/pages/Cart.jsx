import { Link } from "react-router-dom";
import {useSelector} from "react-redux";
import CartItem  from "../components/CartItem";
import { useState,useEffect } from "react";


const Cart = () => {

  const{cart} = useSelector((state)=> state);
  const [totalAmount, setTotalAmount] = useState(0);


    useEffect (()=>{
      setTotalAmount(cart.reduce((acc,curr)=> acc + curr.price,0))
    },[cart]);

  return( 
  <div >
  { cart.length > 0?
  (<div className="flex md:flex-row flex-col justify-center max-w-6xl mx-auto gap-4">
      <div className="w-[100%] flex flex-col md:w-[60%] p-2">
        {
          cart.map((item,index)=>{
            return <CartItem key={item.id} item={item} itemIndex={index} cartLength={cart.length} ></CartItem>
          })
        }
      </div>
       
    <div className="flex flex-col w-full md:w-[40%] justify-between items-center mt-5">
      <div className="flex flex-col justify-between w-full p-5 gap-5 my-14 h-full" >
        <div className="flex flex-col ">
          <div className="font-semibold text-xl text-green-800">YOUR CART</div>
          <div className="font-semibold text-5xl text-green-700">SUMMARY</div>
          <p className="mt-3"> 
          <span className="text-xl">Total Items :{cart.length}</span>
          </p>
        </div>
         <div className="flex flex-col">
           <p className="text-xl font-bold">
            <span>Total Amount :${totalAmount}</span>
           </p>
            <button  className="bg-green-700 w-full hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-green-600 font-bold hover:text-green-700 p-3 text-xl">Check Out</button>
         </div>
      </div>
    </div>
  </div>):
  (
    <div className="min-h-[80vh] flex flex-col items-center justify-center">
       <h1 className="text-gray-700 font-semibold text-xl mb-2">
       YOUR CART IS EMPTY !
       </h1>
       <Link to ={"/"}>
        <button className="bg-green-600 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-green-600 font-semibold hover:text-green-700 p-3 px-10 tracking-wide">
          SHOP NOW 
        </button>
       </Link>
    </div>
  )

  }</div>);
};

export default Cart;
