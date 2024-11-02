import { Link, NavLink } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import { useState } from "react";

const NavBar = () => {
   const [showDropdown, setShowDropdown] = useState(false);
   return (
      <nav className='w-11/12 max-w-7xl mx-auto py-3 flex items-center justify-between mb-8 sticky top-0 bg-[#ffffff80] backdrop-blur'>
         <Link to='/' className='text-xl font-semibold flex-grow'>
            CareerHub
         </Link>
         <div
            className={`md:flex flex-col md:flex-row md:items-center md:justify-between flex-grow gap-4 fixed md:static right-0 top-12 bg-purple-100 md:bg-transparent p-5 rounded-md ${
               !showDropdown ? "hidden" : ""
            }`}>
            <div className='flex flex-col md:flex-row gap-3'>
               <NavLink
                  to='/'
                  className={({ isActive }) =>
                     isActive ? "text-purple-700 font-bold" : ""
                  }>
                  Statistics
               </NavLink>
               <NavLink
                  to='/applied-jobs'
                  className={({ isActive }) =>
                     isActive ? "text-purple-700 font-bold" : ""
                  }>
                  Applied Jobs
               </NavLink>
               <NavLink
                  to='/blog'
                  className={({ isActive }) =>
                     isActive ? "text-purple-700 font-bold" : ""
                  }>
                  Blog
               </NavLink>
            </div>
            <Link to='/'>
               <button className='bg-purple-700 py-2 px-4 rounded-md text-white font-medium mt-3 md:mt-0'>
                  Start Applying
               </button>
            </Link>
         </div>
         <IoMdMenu
            size={30}
            className='md:hidden cursor-pointer'
            onClick={() => setShowDropdown(!showDropdown)}
         />
      </nav>
   );
};

export default NavBar;
