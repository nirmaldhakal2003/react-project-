import { useQuery } from "@tanstack/react-query";

const NewCard = () => {
  const { data, isLoading, isError } = useQuery({
    queryFn: async () => {
      try {
        const dataFetch = await fetch("https://fakestoreapi.com/products");
        if (dataFetch.ok) {
          const jsonData = await dataFetch.json();
          return jsonData;
        } else {
          throw new Error("Failed to fetch data");
        }
      } catch (error) {
        console.log(error);
      }
    },
    queryKey: ["getProducts"],
  });

  // Check if loading
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-[100vh]">
        Loading...
      </div>
    );
  }

  // Check if error
  if (isError) {
    console.log("Error while fetching data");
    return <div>Error fetching data</div>;
  }

  // Check if data is undefined or null
  if (!data) {
    console.log("Data is undefined or null");
    return <div>Data </div>;
  }

  return (
    <div className="grid grid-cols-3 gap-12 m-4">
      {data.map((item) => (
        <div
          key={item.id}
          className="bg-red-500 hover:bg-black rounded-md text-white cursor-pointer p-4"
        >
          <img
            src={item.image}
            alt="product"
            className="h-32 rounded-md mb-4"
          />

          <h1 className="font-bold text-2xl mb-3">{item.title}</h1>
          <div>{item.description}</div>
        </div>
      ))}
    </div>
  );
};

export default NewCard;