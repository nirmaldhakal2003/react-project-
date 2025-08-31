import { Link } from "react-router-dom";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Button from "../components/Button";



function ThankYou() {
  return (
    <>
      <Navbar />
      <section className="min-h-screen flex flex-col justify-center items-center bg-orange-300 px-6 text-center">
        <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-black via-orange-800 to-black bg-clip-text text-transparent animate-gradient">
          Thank You!
        </h1>
        <p className="text-xl text-gray-700 max-w-2xl mb-10">
          Your message has been successfully submitted. We'll get back to you soon!
        </p>
        <Link to="/">
         <Button hehe="Go Back To Home"/>
         </Link>
   
      </section>
      <Footer />
    </>
  );
}

export default ThankYou;
