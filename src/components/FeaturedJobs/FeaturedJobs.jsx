import axios from "axios";
import { useEffect, useState } from "react";
import FeaturedJob from "../FeaturedJob/FeaturedJob";

const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        axios.get('jobs.json')
        .then(data => setJobs(data.data))
    },[])
    
  return (
    <section className="w-11/12 max-w-7xl mx-auto my-10 space-y-4">
      <h2 className="text-3xl font-bold text-center">Featured Jobs</h2>
      <p className="text-center">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div>
        {
            jobs.map(job => <FeaturedJob key={job.id} job={job} />)
        }
      </div>
    </section>
  );
};

export default FeaturedJobs;
