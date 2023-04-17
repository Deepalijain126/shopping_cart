import {MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import {remove} from "../redux/Slices/CartSlice";
import {toast} from "react-hot-toast";

const CartItem = ({item,itemIndex,cartLength}) => {
const dispatch = useDispatch();

const removeFromCart  = () => {
  dispatch(remove(item.id));
  toast.error("Item Removed");
}

  return( 
  
  <div className="w-full flex flex-col p-0 mt-7">
      <div className="flex  flex-col w-full md:flex-row items-center justify-between  p-0 mt-1 mb-2  gap-8 md:p-5  ">
        <div className="w-[30%]">
           <img src={item.image} className="object-cover" ></img>
        </div>
        <div className=" md:ml-10 self-start space-y-5 w-[100%] md:w-[70%]">
        <h1 className="text-[1.35em] text-slate-700 font-semibold">{item.title}</h1>
        <h1 className="text-base text-slate-700 font-medium ">{item.description.split(" ").slice(0,15).join(" ")+ "..."}</h1>
        <div className="flex items-center justify-between">
          <p className="font-bold text-lg text-green-600">${item.price}</p>
          <div onClick={removeFromCart}
           className="bg-red-200 group hover:bg-red-400 transition-transform duration-300 cursor-pointer rounded-full p-2 mr-6">
           <MdDelete className="text-red-800 group-hover:text-white h-[1rem] w-[1rem]"></MdDelete></div>
        </div>

        </div>
      </div>
      {itemIndex !== cartLength - 1 && (
        <hr className="h-[1rem] border-slate-700" />
      )}
  </div>);
};

export default CartItem;



