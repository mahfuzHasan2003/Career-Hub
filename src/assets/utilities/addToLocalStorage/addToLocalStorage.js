import { toast } from "react-toastify";

// Getting Current data from Local Storage
const getCurrentData = () => {
   const data = localStorage.getItem("appliedJobs");
   return data ? JSON.parse(data) : [];
};

// Adding new data to LS
const addToLocal = (newJob) => {
   let allData = getCurrentData();
   if (allData.some((job) => job.id === newJob.id)) {
      toast.warn("Already Applied.", {
         position: "top-center",
         autoClose: 3000,
         hideProgressBar: false,
         closeOnClick: true,
         pauseOnHover: true,
         draggable: true,
         progress: undefined,
         theme: "colored",
      });
      return;
   }
   toast.success("You have successfully applied.", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
   });
   allData = [newJob, ...allData];
   localStorage.setItem("appliedJobs", JSON.stringify(allData));
};

export { getCurrentData, addToLocal };
