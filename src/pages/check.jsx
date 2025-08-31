import './About.css'
import Navbar from '../components/navbar';
import Footer from '../components/footer';



const About = () => {
  return (
    <>
    <Navbar/>
    <section className="min-h-screen bg-orange-200 text-gray-800 py-20 px-6">
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

    <Footer/>
    </>
  );
};

export default About;
