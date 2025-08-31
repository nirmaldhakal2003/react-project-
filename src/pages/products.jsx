import { useEffect, useState } from "react";
import { apiData } from "../API/ApiData";

import Card from "../components/cards";
import Navbar from "../components/navbar";
import Footer from "../components/footer";


const Products = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    apiData().then((posts) => setData(posts));
  }, []);

  const handleDelete = (id) => {
    const updated = data.filter((item) => item.id !== id);
    setData(updated);
  };

  const handleUpdate = (id, updatedItem) => {
    const updated = data.map((item) =>
      item.id === id ? { ...item, ...updatedItem } : item
    );
    setData(updated);
  };

  return (
    <section className="bg-orange-200 min-h-screen">
      <Navbar />
      <h2 className="text-5xl font-bold text-center mt-10 bg-gradient-to-r from-black via-red-600 to-black bg-clip-text text-transparent animate-gradient mb-10">
        Products
      </h2>

      <div className="flex flex-wrap gap-10 justify-center p-10">
        {data.length > 0 ? (
          data.map((post) => (
            <Card
              key={post.id}
              id={post.id}
              title={post.title}
              image={post.image}
              description={post.description}
              price={post.price}
              onDelete={handleDelete}
              onUpdate={handleUpdate}
            />
          ))
        ) : (
          <p className="text-center text-xl font-semibold">
            Loading or No data found
          </p>
        )}
      </div>

      <Footer />
    </section>
  );
};

export default Products;
