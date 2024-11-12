import bg from "../../../../assets/bg.avif";
const Banner = () => {
  return (
    <>
      <section
        className="relative flex items-center justify-center bg-cover bg-center border-b"
        // style={{ backgroundImage: `url('your-image.jpg')` }}
      >
        <div
          className="absolute w-full h-full  bg-cover blur-sm bg-center"
          style={{ backgroundImage: `url(${bg})` }}
        ></div>
        <div className="relative text-center text-darkGray max-w-xl mx-auto my-20">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Unlock Your Potential
          </h1>
          <p className="mt-4 text-base md:text-lg text-white ">
            Take control with our powerful, easy-to-use tools designed just for
            you.
          </p>

          {/* Search Bar */}
          <div className="mt-6 flex w-full">
            <input
              type="text"
              placeholder="Search for services or track your parcel..."
              className="w-full px-4 py-2 rounded-l-lg text-darkGray bg-lightGray focus:outline-none"
            />
            <button className="px-6 py-3 bg-teal hover:bg-orange text-white font-semibold rounded-r-lg">
              Search
            </button>
          </div>

          {/* Get Started Button */}
          <button className="mt-8 px-6 py-3 bg-teal hover:bg-orange text-white font-semibold rounded-md">
            Get Started
          </button>
        </div>
      </section>
    </>
  );
};

export default Banner;
