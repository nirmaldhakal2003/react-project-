import { useState } from "react";
import Button from "./Button";

const Card = ({ id, title, image, description, price, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);
  const [newPrice, setNewPrice] = useState(price);

  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    onUpdate(id, {
      title: newTitle,
      description: newDescription,
      price: parseFloat(newPrice),
    });
    setIsEditing(false);
  };

  return (
    <div
      style={{ boxShadow: "5px 5px 10px black" }}
      className="bg-gradient-to-br from-red-300 via-orange-300 to-red-300
                 p-6 rounded-3xl w-72 min-h-[500px] flex flex-col justify-between
                 transition-transform duration-500 ease-in-out 
                 hover:scale-105 hover:shadow-2xl"
    >
      <div className="flex justify-center overflow-hidden rounded-xl mb-4">
        <img
          src={image}
          alt={title}
          className="w-[100px] h-[100px] object-cover rounded-xl 
                     transition-transform duration-500 hover:scale-110"
        />
      </div>

      {isEditing ? (
        <form onSubmit={handleUpdateSubmit} className="flex flex-col gap-2">
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            className="p-2 rounded"
            placeholder="Title"
            required
          />
          <textarea
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
            className="p-2 rounded"
            placeholder="Description"
            rows="2"
            required
          />
          <input
            type="number"
            value={newPrice}
            onChange={(e) => setNewPrice(e.target.value)}
            className="p-2 rounded"
            placeholder="Price"
            required
          />
          <div className="flex gap-2">
            <button type="submit" className="bg-green-600 text-white px-3 py-1 rounded-xl">
              Save
            </button>
            <button
              type="button"
              className="bg-gray-500 text-white px-3 py-1 rounded-xl"
              onClick={() => setIsEditing(false)}
            >
              Cancel
            </button>
          </div>
        </form>
      ) : (
        <>
          <div>
            <h2 className="text-xl font-bold animate-pulse mb-2">{title}</h2>
            <p className="text-black text-sm line-clamp-3">{description}</p>
            <p className="text-black font-bold mt-2">Price: ${price}</p>
          </div>

          <div className="flex flex-wrap gap-2 mt-2">
            <Button hehe="Buy Now" />
            <Button hehe="Add To Cart" />
            <button
              onClick={() => setIsEditing(true)}
              className="bg-blue-500 text-white px-3 py-1 rounded-xl hover:bg-blue-600"
            >
              Update
            </button>
            <button
              onClick={() => onDelete(id)}
              className="bg-red-500 text-white px-3 py-1 rounded-xl hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Card;
