import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./pages/about";
import Products from "./pages/products";
import Items from "./pages/ProductD";
import Login from "./pages/Login";
import Contact from "./pages/contact";
import ThankYou from "./pages/Thankyou";
import ShopNow from "./pages/ShopNow";
import Cart from "./pages/cart";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/productd" element={<Items />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/thankyou" element={<ThankYou />} />
        <Route path="/shopnow" element={<ShopNow />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
