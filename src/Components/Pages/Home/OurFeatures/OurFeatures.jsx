import { FaShieldAlt, FaShippingFast, FaUsers } from "react-icons/fa";
import CountUp from "react-countup";

const featuresData = [
  {
    icon: <FaShieldAlt className="text-teal text-4xl mx-auto mb-4" />,
    title: "Parcel Safety",
    description: "We ensure your parcel reaches safely to its destination.",
  },
  {
    icon: <FaShippingFast className="text-teal text-4xl mx-auto mb-4" />,
    title: "SuperFast Delivery",
    description: "Experience ultra-fast delivery with real-time tracking.",
  },
  {
    icon: <FaUsers className="text-teal text-4xl mx-auto mb-4" />,
    title: "Trusted by Many",
    description: "Join our growing community of satisfied users.",
  },
];

const statisticsData = [
  {
    label: "Total Parcels Booked",
    value: 500,
  },
  {
    label: "Total Parcels Delivered",
    value: 450,
  },
  {
    label: "Total Registered Users",
    value: 300,
  },
];

const OurFeatures = () => {
  return (
    <section className="py-12 bg-lightGray text-darkGray">
      <div className="mx-auto">
        {/* Feature Cards */}
        <h2 className="text-3xl font-bold text-center mb-8">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuresData.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-md shadow-lg text-center"
            >
              {feature.icon}
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Statistics Section */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold text-center mb-8">
            App Usage Statistics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            {statisticsData.map((stat, index) => (
              <div key={index} className="p-6 bg-white rounded-md shadow-lg">
                <h3 className="text-2xl font-bold text-teal">
                  <CountUp end={stat.value} duration={3} />+
                </h3>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurFeatures;
