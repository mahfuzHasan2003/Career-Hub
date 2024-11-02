import { CiLocationOn, CiDollar } from "react-icons/ci";
import { Link } from "react-router-dom";

const AppliedJob = ({ job }) => {
   const {
      id,
      logo,
      job_title,
      company_name,
      remote_or_onsite,
      location,
      job_type,
      salary,
   } = job;

   return (
      <div className='flex flex-col md:flex-row justify-between md:items-center border p-4 rounded-md'>
         <div className='flex flex-col md:flex-row gap-5'>
            <div className='md:p-4 md:bg-gray-200 rounded-md flex items-center'>
               <img src={logo} alt={job_title} className='w-28 align-middle' />
            </div>
            <div className='space-y-2'>
               <h4 className='font-semibold text-xl'>{job_title}</h4>
               <p>{company_name}</p>
               <div className='flex gap-3'>
                  <span className='text-purple-700 border border-purple-700 px-2 rounded-sm text-sm'>
                     {remote_or_onsite}
                  </span>
                  <span className='text-purple-700 border border-purple-700 px-2 rounded-sm text-sm'>
                     {job_type}
                  </span>
               </div>
               <div className='flex flex-wrap'>
                  <p className='flex items-center gap-1 mr-3'>
                     <CiLocationOn /> {location}
                  </p>
                  <p className='flex items-center gap-1'>
                     <CiDollar /> Salary : {salary}
                  </p>
               </div>
            </div>
         </div>
         <Link to={`/job/${id}`}>
            <button className='border border-purple-700 text-purple-700 hover:bg-purple-700 py-2 px-4 rounded-md hover:text-white mt-2 font-medium'>
               View Details
            </button>
         </Link>
      </div>
   );
};

export default AppliedJob;
