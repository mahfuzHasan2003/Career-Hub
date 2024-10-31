import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="w-11/12 max-w-7xl mx-auto py-3 flex items-center justify-between mb-8">
      <Link to="/" className="text-xl font-semibold">
        CareerHub
      </Link>
      <div className="flex gap-4">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "text-purple-700" : "")}
        >
          Statistics
        </NavLink>
        <NavLink
          to="/applied-jobs"
          className={({ isActive }) => (isActive ? "text-purple-700" : "")}
        >
          Applied Jobs
        </NavLink>
        <NavLink
          to="/blog"
          className={({ isActive }) => (isActive ? "text-purple-700" : "")}
        >
          Blog
        </NavLink>
      </div>
      <Link to="/">
        {" "}
        <button className="bg-purple-700 py-2 px-4 rounded-md text-white font-medium">
          Start Applying
        </button>
      </Link>
    </nav>
  );
};

export default NavBar;
