import { Link } from "react-router-dom";
import bannerImg from "../../assets/images/user.png";

const HeaderBanner = () => {
  return (
    <section className="bg-gradient-to-t from-purple-50 to-transparent">
      <div className="flex *:flex-1 w-11/12 max-w-7xl mx-auto items-center">
        <div className="flex flex-col gap-5">
          <h1 className="text-5xl font-bold leading-snug">
            One Step <br /> Closer To Your <br />
            <span className="text-purple-700">Dream Job</span>
          </h1>
          <p>
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job application
            from start to finish.
          </p>
          <Link to="/">
            <button className="bg-purple-700 py-2 px-4 rounded-md text-white font-medium">
              Get Started
            </button>
          </Link>
        </div>
        <div className="">
          <img src={bannerImg} alt="banner image" className="ml-auto" />
        </div>
      </div>
    </section>
  );
};

export default HeaderBanner;