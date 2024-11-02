import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";
import HeaderBanner from "../HeaderBanner/HeaderBanner";
import JobCategories from "../JobCategories/JobCategories";

const Statistics = () => {
   return (
      <div className=''>
         <HeaderBanner />
         <JobCategories />
         <FeaturedJobs />
      </div>
   );
};

export default Statistics;
