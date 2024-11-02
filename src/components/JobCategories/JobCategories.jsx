import axios from "axios";
import JobCategory from "../JobCategory/JobCategory";
import { useEffect, useState } from "react";

const JobCategories = () => {
   const [categories, setCategories] = useState([]);
   useEffect(() => {
      axios.get("categories.json").then((data) => setCategories(data.data));
   }, []);
   return (
      <section className='w-11/12 max-w-7xl mx-auto my-10 space-y-4'>
         <h2 className='text-3xl font-bold text-center'>Job Category List</h2>
         <p className='text-center'>
            Explore thousands of job opportunities with all the information you
            need. Its your future
         </p>
         <div className='grid grid-cols-2 md:grid-cols-4 gap-5'>
            {categories.map((category) => (
               <JobCategory key={category.id} category={category} />
            ))}
         </div>
      </section>
   );
};

export default JobCategories;
