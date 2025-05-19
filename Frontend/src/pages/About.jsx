import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Flag from "/flag.png";

const About = () => {
  return (
    <>
      <div className="about">
        <div className="about-card">
          <img
            src={Flag}
            alt="Afghan Flag"
            className="image"
          />

          <div className="text-gray-800 font-sans max-w-xl text-center sm:text-left">
            <h1 className="text-2xl font-bold mb-4">
              AFG Proverbs
            </h1>

            <p className="text-base mb-6">
              Welcome to the Afghan Proverbs website — a rich collection of timeless
              wisdom and cultural heritage from Afghanistan. Explore, learn, and share
              traditional Afghan sayings that have been passed down through generations.
              Our goal is to preserve these proverbs and make them accessible to everyone
              interested in Afghan culture and language.
            </p>
   
            <div className="flex justify-center sm:justify-start">
              <Link
                to="/create"
                className="create-btn"
              >
                Create New
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default About;
