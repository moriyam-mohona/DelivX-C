import Banner from "../Banner/Banner";
import OurFeatures from "../OurFeatures/OurFeatures";
import TopDeliveryMen from "../TopDeliveryMen/TopDeliveryMen";

const Home = () => {
  return (
    <div className="space-y-10">
      <Banner />
      <OurFeatures />
      <TopDeliveryMen />
      <div className="App"></div>
    </div>
  );
};

export default Home;
