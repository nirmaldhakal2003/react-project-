import { Link } from "react-router-dom";
import "./App.css";
import Button from "./components/Button";
import Card from "./components/cards";
import Footer from "./components/footer";
import Navbar from "./components/navbar";



function Home() {
  return (
    <>
    <section className="bg-orange-300">
      <Navbar />

      <div>
        <section
          style={{ backgroundImage: "url('background.jpg')" }}
          className="bg-gradient-to-r from-blue-100 to-indigo-200 py-20 h-screen bg-cover bg-center bg-no-repeat flex items-center "
        >
          <div className="text-center ml-50 ">
            <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-black via-orange-800 to-black bg-clip-text text-transparent animate-gradient">
              Welcome to Panda E-Shop
            </h1>
            <p className="text-xl text-gray-600 mb-6 italic animate-fadeIn">
              Find the best deals on every Item
            </p>
            <Link to="/products">
              <Button hehe="Shop Now" />
            </Link>
          </div>
        </section>
      
      <section className="min-h-scree bg-orange-200 text-gray-800 py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-5xl font-bold text-center bg-gradient-to-r from-black via-red-600 to-black bg-clip-text text-transparent animate-gradient mb-10">About Panda E-Shop</h2>

        <div className="grid md:grid-cols-2 gap-10 items-center">
         
          <img
            src="logo.png" 
            alt="About Panda E-Shop"
            className="rounded-4xl shadow-lg"
          />

          <div>
            <h3 className="text-2xl font-bold mb-4 text-gray-600">Who We Are</h3>
            <p className="mb-4 text-lg text-gray-700">
              Panda E-Shop is your one-stop online destination for quality products at unbeatable prices. 
              We believe shopping should be easy, affordable, and fun.
            </p>
            <h3 className="text-2xl font-bold mb-4 text-gray-600">Our Mission</h3>
            <p className="text-lg text-gray-700">
              We aim to deliver the best customer experience by offering a wide range of handpicked items, 
              secure payments, and fast delivery. Your satisfaction is our priority!
            </p>
          
          </div>
        </div>
        
      </div>
    </section>
    <section >
     <h1 className="text-5xl flex justify-center mt-20 font-extrabold mb-4 bg-gradient-to-r from-black via-orange-800 to-black bg-clip-text text-transparent animate-gradient">
              Products
            </h1>
    <div className='flex flex-wrap justify-center align-middle gap-10 mt-10 mb-10 mr-15 '>

     <Link to="/ProductD">
 <Card image="chair.png" title="Chair" description="Aeron—the original innovative work chair, designed for all, thanks to the research of designers Bill Stumpf and Don Chadwick. Updated today with ocean-bound .." price="Rs. 2000" />
</Link>
<Link to="/ProductD">
 <Card image="mobile.png" title="Iphone-12" description="Aeron—the original innovative work chair, designed for all, thanks to the research of designers Bill Stumpf and Don Chadwick. Updated today with ocean-bound .." price="Rs. 2000" />
</Link>
<Link to="/ProductD">
 <Card image="electricguitar.png" title="Electric Guitar" description="Aeron—the original innovative work chair, designed for all, thanks to the research of designers Bill Stumpf and Don Chadwick. Updated today with ocean-bound .." price="Rs. 2000" />
</Link>
<Link to="/ProductD">
 <Card image="headphone.png" title="DJ-Headphone" description="Aeron—the original innovative work chair, designed for all, thanks to the research of designers Bill Stumpf and Don Chadwick. Updated today with ocean-bound .." price="Rs. 2000" />
</Link>
<Link to="/ProductD">
 <Card image="tripod.png" title="Tripod" description="Aeron—the original innovative work chair, designed for all, thanks to the research of designers Bill Stumpf and Don Chadwick. Updated today with ocean-bound .." price="Rs. 2000" />
</Link>
<Link to="/ProductD">
 <Card image="keyboard.png" title="Chair" description="Aeron—the original innovative work chair, designed for all, thanks to the research of designers Bill Stumpf and Don Chadwick. Updated today with ocean-bound .." price="Rs. 2000" />
</Link>





    
    </div>
    <div className="flex justify-center mb-10">
   <Link to="/ProductD">
    <Button hehe="View More Products"/>
   </Link>
    </div>
    </section>
    </div>
    <section className="min-h-scree  bg-orange-200 py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center animate-fadeInSlow">
         
          <div className="animate-slideUp">
            <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-black via-orange-800 to-black bg-clip-text text-transparent animate-gradient">
              Get in Touch
            </h1>
            <p className="text-gray-700 text-lg mb-6">
              We'd love to hear from you. Whether you have a question, feedback,
              or a business inquiry, feel free to reach out.
            </p>
            <div className="text-gray-700 space-y-4">
              <p><strong className="text-red-500"> Email:</strong> nirmalbsccsit2@gmail.com</p>
              <p><strong className="text-red-500"> Phone:</strong> +977-9748845865</p>
              <p><strong className="text-red-500"> Address:</strong> Palpa-Rampur, Nepal</p>
            </div>
          </div>

       
          <form
            className="bg-white rounded-3xl shadow-lg p-8 space-y-6 animate-zoomIn"
            action="https://api.web3forms.com/submit"
            method="POST"
          >
            <input type="hidden" name="access_key" value="8c7a80b2-c731-40fc-8c00-d64469b94ba1" />
            <input type="hidden" name="redirect" value="http://localhost:5173/thankyou" />

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Your Email
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Your Message
              </label>
              <textarea
                name="message"
                rows="5"
                required
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              ></textarea>
            </div>

            <Button hehe="Send Message" />
          </form>
        </div>
      </section>

    
   
   

      <Footer />
      </section>
    </>
  );
}

export default Home;
