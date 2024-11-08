const Banner = () => {
  return (
    <>
      <section
        className="flex items-center justify-center bg-cover bg-center my-10"
        // style={{ backgroundImage: `url('your-image.jpg')` }}
      >
        <div className="text-center text-darkGray max-w-xl mx-auto ">
          <h1 className="text-4xl md:text-5xl font-bold text-teal">
            Unlock Your Potential
          </h1>
          <p className="mt-4 text-lg md:text-xl text-Gray">
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
