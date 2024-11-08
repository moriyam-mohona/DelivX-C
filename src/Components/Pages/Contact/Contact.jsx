const Contact = () => {
  return (
    <div className="min-h-screen bg-lightGray flex items-center justify-center p-6">
      <div className="w-full rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-semibold text-darkGray text-center mb-6">
          Contact Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-semibold text-teal mb-4">
              Get in Touch
            </h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-teal"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-teal"
              />
              <textarea
                placeholder="Your Message"
                rows="4"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-teal"
              />
              <button
                type="submit"
                className="w-full py-3 bg-teal text-white font-semibold rounded-md hover:bg-orange transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-2xl font-semibold text-teal mb-4">
              Our Office
            </h3>
            <p className="text-Gray mb-4">
              We’d love to hear from you! Contact us using the form, or reach
              out through any of the methods below.
            </p>
            <ul className="space-y-2 text-darkGray">
              <li>
                <span className="font-semibold">Address:</span> 123 Parcel Ave,
                Delivery City, DX 12345
              </li>
              <li>
                <span className="font-semibold">Phone:</span> +1 (234) 567-890
              </li>
              <li>
                <span className="font-semibold">Email:</span>{" "}
                contact@yourwebsite.com
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-teal hover:text-orange">
                <i className="fab fa-facebook-f"></i>{" "}
                {/* Placeholder for Facebook */}
              </a>
              <a href="#" className="text-teal hover:text-orange">
                <i className="fab fa-twitter"></i>{" "}
                {/* Placeholder for Twitter */}
              </a>
              <a href="#" className="text-teal hover:text-orange">
                <i className="fab fa-instagram"></i>{" "}
                {/* Placeholder for Instagram */}
              </a>
              <a href="#" className="text-teal hover:text-orange">
                <i className="fab fa-linkedin"></i>{" "}
                {/* Placeholder for LinkedIn */}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
