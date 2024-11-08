const About = () => {
  return (
    <div className="min-h-screen bg-lightGray p-8 flex flex-col items-center">
      <div className="w-full rounded-lg shadow-lg p-8">
        <h1 className="text-4xl font-bold text-darkGray text-center mb-6">
          About Us
        </h1>

        {/* Mission Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-teal mb-4">Our Mission</h2>
          <p className="text-Gray leading-relaxed">
            We aim to revolutionize the parcel delivery industry by providing
            reliable, fast, and secure delivery services tailored to meet the
            needs of our customers. Our goal is to make parcel delivery
            efficient and trustworthy.
          </p>
        </section>

        {/* Vision Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-teal mb-4">Our Vision</h2>
          <p className="text-Gray leading-relaxed">
            To be the most trusted delivery service provider, constantly
            innovating and enhancing our services to meet the evolving needs of
            our clients and communities.
          </p>
        </section>

        {/* Core Values Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-teal mb-4">
            Our Core Values
          </h2>
          <ul className="list-disc list-inside text-Gray space-y-2">
            <li>
              <span className="font-semibold">Integrity:</span> We uphold
              honesty and transparency in every aspect of our business.
            </li>
            <li>
              <span className="font-semibold">Customer Focus:</span> Our
              customers are at the center of everything we do.
            </li>
            <li>
              <span className="font-semibold">Innovation:</span> Continuously
              improving our services through cutting-edge technology.
            </li>
            <li>
              <span className="font-semibold">Safety:</span> Ensuring the safe
              and secure delivery of every parcel.
            </li>
          </ul>
        </section>

        {/* Team Section */}
        <section>
          <h2 className="text-2xl font-semibold text-teal mb-4">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "John Doe",
                role: "Founder & CEO",
                imageUrl: "/images/john-doe.jpg", // Replace with actual image URLs
              },
              {
                name: "Jane Smith",
                role: "COO",
                imageUrl: "/images/jane-smith.jpg",
              },
              {
                name: "David Brown",
                role: "CTO",
                imageUrl: "/images/david-brown.jpg",
              },
            ].map((teamMember, index) => (
              <div
                key={index}
                className="text-center bg-mediumGray p-4 rounded-lg"
              >
                <img
                  src={teamMember.imageUrl}
                  alt={teamMember.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-darkGray">
                  {teamMember.name}
                </h3>
                <p className="text-Gray">{teamMember.role}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
