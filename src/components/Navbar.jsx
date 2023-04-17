import{FaShoppingCart} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";



const Navbar = () => {
  const {cart} = useSelector((state)=> state);
  return <div>
    <nav className="flex justify-between items-center max-w-6xl mx-auto h-20">
    <NavLink to="/">
    <div className="ml-5">
    <img src="./logo.png" className="h-14"></img>
    </div>
    </NavLink>
    <div className="flex items-center text-slate-100 font-medium mr-5 space-x-5">
    <NavLink to="/"> <p>Home</p>
    </NavLink>
     <NavLink to="/cart">
     <div className="relative">
      <FaShoppingCart className="text-2xl"></FaShoppingCart>
      {cart.length > 0 &&
        <span className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce rounded-full">{cart.length }</span>}
      
      </div>
      </NavLink>
    </div>
       
    </nav>
  </div>;
};

export default Navbar;
