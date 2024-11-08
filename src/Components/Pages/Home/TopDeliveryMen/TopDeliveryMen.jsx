import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";

// Mock data (Replace with real API data)
const deliveryMenData = [
  {
    name: "John Doe",
    image: "https://via.placeholder.com/150",
    parcelsDelivered: 200,
    averageRating: 4.8,
  },
  {
    name: "Jane Smith",
    image: "https://via.placeholder.com/150",
    parcelsDelivered: 180,
    averageRating: 4.6,
  },
  {
    name: "Robert Brown",
    image: "https://via.placeholder.com/150",
    parcelsDelivered: 170,
    averageRating: 4.7,
  },
  // Add more delivery men as needed
];

const TopDeliveryMen = () => {
  const [topDeliveryMen, setTopDeliveryMen] = useState([]);

  // Fetch and sort data (mocked here for simplicity)
  useEffect(() => {
    // Sorting deliveryMenData by parcelsDelivered and averageRating
    const sortedData = deliveryMenData
      .sort((a, b) =>
        b.parcelsDelivered === a.parcelsDelivered
          ? b.averageRating - a.averageRating
          : b.parcelsDelivered - a.parcelsDelivered
      )
      .slice(0, 3); // Select top 3
    setTopDeliveryMen(sortedData);
  }, []);

  return (
    <section className="py-12 bg-lightGray text-darkGray">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Top Delivery Men
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {topDeliveryMen.map((deliveryMan, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-md shadow-lg text-center"
            >
              <img
                src={deliveryMan.image}
                alt={deliveryMan.name}
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">{deliveryMan.name}</h3>
              <p className="text-gray-600 mt-2">
                Parcels Delivered:{" "}
                <span className="font-bold">
                  {deliveryMan.parcelsDelivered}
                </span>
              </p>
              <div className="flex items-center justify-center mt-2">
                <FaStar className="text-yellow-500" />
                <span className="ml-1 text-gray-600 font-bold">
                  {deliveryMan.averageRating.toFixed(1)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopDeliveryMen;
