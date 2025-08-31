import { Component } from "react";
import { Link } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <>
        <div
          style={{ backgroundColor: "#1A1A1A" }}
          className="h-80 bg-1A1A1A-300 flex justify-between "
        >
          <div className="mt-10 ml-30 text-white jus">
            <img className="h-15  " src="\public\logo.png" alt="logo image" />
            <p className="w-70 text-justify mt-3.5">
              An e-commerce website is an online platform that allows people to
              buy and sell products or services over the internet. It enables
              businesses to reach a wide audience, display their offerings,
              manage orders, and handle payments securely.
            </p>
          </div>
          <div className="mt-10 text-white flex justify-around mr-30 gap-x-50 ">
            <div>
              <h3 className="font-bold">Quick Links</h3>
              <div className="mt-3">
                <Link to="" className="block hover:text-red-500">
                  Home
                </Link>
                <Link to="" className="block hover:text-red-500">
                  About
                </Link>
                <Link to="" className="block hover:text-red-500">
                  Products
                </Link>
                <Link to="" className="block hover:text-red-500">
                  Shop Now
                </Link>
                <Link to="" className="block hover:text-red-500">
                  Contact
                </Link>
              </div>
            </div>
            <div>
              <h3 className="font-bold">Customer Care</h3>
              <div className="mt-3">
                <Link to="" className="block hover:text-red-500">
                  Help center
                </Link>
                <Link to="" className="block hover:text-red-500">
                  How to buy
                </Link>
                <Link to="" className="block hover:text-red-500">
                  Return and Refunds
                </Link>
                <Link to="" className="block hover:text-red-500">
                  Contact Us
                </Link>
              </div>
            </div>
            <div>
              <h3 className="font-bold">Address</h3>
              <div className="mt-3">
                <p>Rampur-6, Palpa</p>
              </div>
            </div>
            <div>
              <h3 className="font-bold">Socials</h3>
              <div className="mt-3">
                <Link to="" className="block hover:text-red-500">
                  Facebook
                </Link>
                <Link to="" className="block hover:text-red-500">
                  Instagram
                </Link>
                <Link to="" className="block hover:text-red-500">
                  Twitter
                </Link>
                <Link to="" className="block hover:text-red-500">
                  Youtube
                </Link>
                <Link to="" className="block hover:text-red-500">
                  Tiktok
                </Link>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Footer;
