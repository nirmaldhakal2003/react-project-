import { useState } from "react";

const Hero = () => {
  const [count, setCount] = useState(0);

  function incrementCount() {
    setCount(count + 1);
  }

  function decrementCount() {
    setCount(count - 1);
  }

  return (
    <>
   <div className="flex space-x-10 mb-10 justify-center">
      <button onClick={incrementCount} className="bg-red-900 text-white rounded-2xl w-30">Increment</button>
         <h1 className="text-4xl">{count}</h1>
      <button onClick={decrementCount} className="bg-red-900 text-white rounded-2xl w-30">Decrement</button>
      </div>
    </>
  );
};

export default Hero;
