import { useEffect, useState } from "react";
import JobCard from "../JobCard/JobCard";

const FeaturedJobs = () => {

  const [jobs, setJobs] = useState([]);
  const [seeJobs, setSeeJobs] = useState(4);

  useEffect(() => {
    fetch("jobs.json")
      .then(res => res.json())
      .then(data => setJobs(data));
  }, [])

  return (
    <>
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 my-12">
        {
          jobs.slice(0, seeJobs).map(job => <JobCard key={job.id} job={job}></JobCard>)
        }
      </section>
      <div className={`text-center mb-5 ${seeJobs === jobs.length && "hidden"}`}>
        <button onClick={() => setSeeJobs(jobs.length)} className="btn btn-primary rounded">See All Jobs</button>
      </div>
    </>
  )
}

export default FeaturedJobs;