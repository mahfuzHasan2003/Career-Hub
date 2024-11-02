import { CiLocationOn, CiDollar } from "react-icons/ci";
import { Link } from "react-router-dom";
const FeaturedJob = ({ job }) => {
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
      <>
         <div className='flex flex-col gap-2 p-5 border rounded-md'>
            <img src={logo} alt={company_name} className='w-24' />
            <h4 className='text-xl font-semibold'>{job_title}</h4>
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
               <p className='flex items-center gap-1 mr-4'>
                  <CiLocationOn /> {location}
               </p>
               <p className='flex items-center gap-1'>
                  <CiDollar /> Salary : {salary}
               </p>
            </div>
            <Link to={`/job/${id}`} className='mt-auto'>
               <button className='bg-purple-700 py-2 px-4 rounded-md text-white mt-2 font-medium'>
                  View Details
               </button>
            </Link>
         </div>
      </>
   );
};

export default FeaturedJob;
