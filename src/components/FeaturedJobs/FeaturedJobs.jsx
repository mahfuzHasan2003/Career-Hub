import axios from "axios";
import { useEffect, useState } from "react";
import FeaturedJob from "../FeaturedJob/FeaturedJob";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    axios.get("jobs.json").then((data) => setJobs(data.data));
  }, []);

  return (
    <section className="w-11/12 max-w-7xl mx-auto my-10 space-y-4">
      <h2 className="text-3xl font-bold text-center">Featured Jobs</h2>
      <p className="text-center">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {jobs.map((job) => (
          <FeaturedJob key={job.id} job={job} />
        ))}
      </div>
      <div className="text-center">
          <button className="bg-purple-700 py-2 px-4 rounded-md text-white font-medium mx-auto">
            Show All Jobs
          </button>
      </div>
    </section>
  );
};

export default FeaturedJobs;
