import Button from "./Button";

const ProductDetails = ({image,title, description, Price}) => {
  return (
    <div className="p-10 max-w-4xl mx-auto flex flex-col md:flex-row gap-10">
      <img src={image} alt={title} className="w-full md:w-1/2 object-cover rounded" />
      <div>
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        <p className="text-2xl text-indigo-600 mb-2">{Price}</p>
        <p className="text-gray-700 mb-6">{description}</p>
       <Button hehe="Buy Now"/>
      </div>
    </div>
  );
};

export default ProductDetails;
