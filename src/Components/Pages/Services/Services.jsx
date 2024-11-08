import CountUp from "react-countup";

const Services = () => {
  const services = [
    {
      title: "Parcel Safety",
      description:
        "Ensuring your parcels are handled with care and delivered securely to their destination.",
      icon: "📦",
    },
    {
      title: "Super Fast Delivery",
      description:
        "Experience ultra-fast delivery services designed to meet your time-sensitive needs.",
      icon: "⚡",
    },
    {
      title: "Real-Time Tracking",
      description:
        "Track your parcel in real-time with our GPS-enabled tracking system, providing updates on every step.",
      icon: "📍",
    },
  ];

  return (
    <div className="min-h-screen bg-lightGray p-8 flex flex-col items-center">
      <div className="w-full rounded-lg shadow-lg p-8">
        <h1 className="text-4xl font-bold text-darkGray text-center mb-10">
          Our Services
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-mediumGray p-6 rounded-lg text-center flex flex-col items-center"
            >
              <div className="text-5xl mb-4">{service.icon}</div> {/* Icon */}
              <h2 className="text-2xl font-semibold text-darkGray mb-2">
                {service.title}
              </h2>
              <p className="text-Gray mb-4">{service.description}</p>
              <button className="mt-auto px-4 py-2 bg-teal hover:bg-orange text-white font-semibold rounded-md">
                Learn More
              </button>
            </div>
          ))}
        </div>

        {/* App Statistics Section */}
        <div className="mt-12">
          <h2 className="text-3xl font-semibold text-teal text-center mb-8">
            Our Impact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <StatCard title="Total Parcels Booked" value={5000} />
            <StatCard title="Total Parcels Delivered" value={4800} />
            <StatCard title="Total Registered Users" value={1200} />
          </div>
        </div>
      </div>
    </div>
  );
};

// Component for Statistics Card
const StatCard = ({ title, value }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg">
    <h3 className="text-xl font-semibold text-darkGray mb-2">{title}</h3>
    <p className="text-3xl font-bold text-teal">
      <CountUp end={value} duration={2.5} />
    </p>
  </div>
);

export default Services;
