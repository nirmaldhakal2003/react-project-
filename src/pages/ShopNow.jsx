
import { Link } from "react-router-dom";

import Card from "../components/cards";
import Button from "../components/Button";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import NewCard from "../components/NewCard";

function ShopNow() {
  return (
    <>
      <Navbar />
      <section className="min-h-screen bg-gradient-to-br bg-orange-300 py-20 px-6">
        <div className="max-w-7xl mx-auto text-center ">
          <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-black via-orange-800 to-black bg-clip-text text-transparent animate-gradient">
            Shop Now
          </h1>
          <p className="text-lg text-gray-700 mb-12 max-w-xl mx-auto">
            Discover a wide range of quality products selected just for you.
          </p>

          <div className="flex flex-wrap justify-center gap-10">
            {[
              ["chair.png", "Chair"],
              ["mobile.png", "Iphone-12"],
              ["electricguitar.png", "Electric Guitar"],
              ["headphone.png", "DJ-Headphone"],
              ["tripod.png", "Tripod"],
              ["keyboard.png", "Gaming Keyboard"]
            ].map(([image, title], i) => (
              <Link
                to="/ProductD"
                key={i}
                className="transform transition duration-300 hover:scale-105 hover: animate-zoomIn"
              >
                <Card
                  image={image}
                  title={title}
                  description="High-quality product crafted for performance and style."
                  price="Rs. 2000"
                />
              </Link>
            ))}
          </div>

          <div className="mt-12">
            <Button hehe="View More Products" />
          </div>
        </div>
      </section>
      <NewCard />
      <Footer />
    </>
  );
}

export default ShopNow;
