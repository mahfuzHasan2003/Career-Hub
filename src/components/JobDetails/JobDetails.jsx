import { useLoaderData, useParams } from "react-router-dom";
import { CiDollar, CiPhone, CiMail, CiLocationOn } from "react-icons/ci";
import { PiSubtitlesSlashLight } from "react-icons/pi";

const JobDetails = () => {
  const { id } = useParams();
  const data = useLoaderData().data;

  const job = data.find((job) => job.id === parseInt(id));
  const {
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    salary,
    job_title,
    contact_information,
  } = job;

  return (
    <section className="w-11/12 max-w-7xl mx-auto my-10 space-y-4">
      <h2 className="font-bold text-3xl">Job Details</h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="lg:col-span-2 space-y-3">
          <p>
            <span className="font-bold">Jobs Description : </span>
            {job_description}
          </p>
          <p>
            <span className="font-bold">Jobs Responsibility : </span>
            {job_responsibility}
          </p>
          <p className="font-bold">Educational Requirements : </p>
          <p>{educational_requirements}</p>
          <p className="font-bold">Experiences :</p>
          <p>{experiences}</p>
        </div>
        <div className="bg-purple-50 p-5 rounded-md space-y-4 max-w-lg">
          <h5 className="text-lg font-bold">Job Details</h5>
          <hr />
          <p className="flex gap-1">
            <CiDollar className="text-purple-700 text-2xl flex-shrink-0" />
            <span className="font-semibold">Salary : </span> {salary} (Per
            Month)
          </p>
          <p className="flex gap-1">
            <PiSubtitlesSlashLight className="text-purple-700 text-2xl flex-shrink-0" />
            <p><span className="font-semibold">Job Title : </span> {job_title}</p>
          </p>
          <h5 className="text-lg font-bold">Contact Information</h5>
          <hr />
          <p className="flex gap-1">
            <CiPhone className="text-purple-700 text-2xl flex-shrink-0" />
            <p><span className="font-semibold">Phone : </span>
            {contact_information.phone}</p>
          </p>
          <p className="flex gap-1">
            <CiMail className="text-purple-700 text-2xl flex-shrink-0" />
            <p><span className="font-semibold">Email : </span>
            {contact_information.email}</p>
          </p>
          <p className="flex gap-1">
            <CiLocationOn className="text-purple-700 text-2xl flex-shrink-0" />
            <p>
              <span className="font-semibold">Address : </span>
              {contact_information.address}
            </p>
          </p>
          <button className="bg-purple-700 text-white px-5 py-2 rounded-md font-semibold w-full">
            Apply Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default JobDetails;
