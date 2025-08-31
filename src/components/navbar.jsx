import { NavLink } from "react-router-dom";
import Button from "./Button";

const Navbar = () => {
  return (
    <>
      <div style={{ backgroundColor: "#1A1A1A" }} className="h-20 px-10 flex items-center justify-between">
        <img className="h-12 ml-30" src="logo.png" alt="logo image" />

        <div className=" flex items-center space-x-14 mr-30">
          <ul className="text-white flex space-x-14">
            <li className="hover:text-red-400"><NavLink to="/">Home</NavLink></li>
            <li className="hover:text-red-400"><NavLink to="/about">About</NavLink></li>
            <li className="hover:text-red-400"><NavLink to="/products">Products</NavLink></li>
            <li className="hover:text-red-400"><NavLink to="/shopnow">shop Now</NavLink></li>
            <li className="hover:text-red-400"><NavLink to="/cart">Cart</NavLink></li>
            <li className="hover:text-red-400"><NavLink to="/contact">Contact</NavLink></li>
          </ul>

          <div className="mb-4">
            <NavLink to="/login"><Button hehe="login" /></NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
