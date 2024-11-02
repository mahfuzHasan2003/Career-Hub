import { useEffect, useState } from "react";
import { getCurrentData } from "../../assets/utilities/addToLocalStorage/addToLocalStorage";
import AppliedJob from "../AppliedJob/AppliedJob";

const AppliedJobs = () => {
   const [userAppliedJobs, setUserAppliedJobs] = useState([]);
   useEffect(() => {
      setUserAppliedJobs(getCurrentData());
   }, []);
   return (
      <section className='w-11/12 max-w-7xl mx-auto my-10 space-y-4'>
         <h2 className='text-3xl font-bold text-center'>Applied Jobs</h2>
         {userAppliedJobs.map((job) => (
            <AppliedJob key={job.id} job={job} />
         ))}
      </section>
   );
};

export default AppliedJobs;
