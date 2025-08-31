import { useEffect, useState } from "react";
import { apiData } from "../API/ApiData";
import Card from "../components/cards";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const Cart = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    apiData().then((posts) => setData(posts));
  }, []);

  return (
    <>
    <Navbar/>
      <div class="flex flex-wrap gap-10 justify-center p-15">
        {data ? (
          data.map((post) => (
            <Card
              title={post.title}
              image={post.image}
              description={post.description}
              price={post.price}
            />
          ))
        ) : (
          <p>No data found</p>
        )}
      </div>
     <Footer/>
    </>
  );
};

export default Cart;
