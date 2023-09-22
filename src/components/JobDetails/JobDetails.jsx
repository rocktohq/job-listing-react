import { useLoaderData, useParams } from "react-router-dom";

const JobDetails = () => {

  const jobs = useLoaderData();
  const { id } = useParams();

  const job = jobs.find(job => job.id === parseInt(id));

  const handleApplyJob = () => {
    console.log(id);
  }

  return (
    <section className="max-w-screen-xl mx-auto p-3 mb-10">
      <h1 className="text-center text-4xl font-bold mb-12">Job Details</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 p-5 space-y-5">
          <p>
            <span className="font-bold">Job Description: </span>
            {job.job_description}
          </p>
          <p>
            <span className="font-bold">Job Responsibility: </span>
            {job.job_responsibility}
          </p>
          <p>
            <span className="font-bold">Educational Requirements: </span>
            {job.educational_requirements}
          </p>
          <p>
            <span className="font-bold">Eperiences: </span>
            {job.experiences}
          </p>
        </div>
        <div className="lg:col-span-1 bg-base-200 rounded-md p-5">
          <div className="text-gray-500">
            <h2 className="font-bold mb-4 border-b pb-4 text-gray-700">Job Details</h2>
            <p className="mb-2">
              <span className="font-bold">Salary: </span>
              {job.salary}
            </p>
            <p>
              <span className="font-bold">Job Title: </span>
              {job.job_title}
            </p>
          </div>
          <div className="text-gray-500">
            <h2 className="font-bold my-4 border-b pb-4 text-gray-700">Contact Information</h2>
            <p className="mb-2">
              <span className="font-bold">Phone: </span>
              {job.contact_information.phone}
            </p>
            <p className="mb-2">
              <span className="font-bold">Email: </span>
              {job.contact_information.email}
            </p>
            <p>
              <span className="font-bold">Address: </span>
              {job.contact_information.address}
            </p>
          </div>
          <button onClick={()=> handleApplyJob(job.id)} className="btn btn-primary rounded w-full mt-5">Apply Now</button>
        </div>
      </div>
    </section>
  )
}

export default JobDetails;