import PropTypes from 'prop-types';
import Location from "../../assets/icons/Location.png";
import Money from "../../assets/icons/money.png";
import { useNavigate } from 'react-router-dom';

const JobCard = ({ job }) => {

  const { id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job;

  const navigate = useNavigate();
  const handleJobDetails = () => {
    navigate(`/jobs/${id}`)
  }

  return (
    <div className="p-10 shadow-md rounded-md">
      <figure>
        <img src={logo} alt={job_title} />
      </figure>
      <div className='card-body p-0'>
        <h2 className="text-2xl font-bold mt-5">{job_title}</h2>
        <h4>{company_name}</h4>
        <div className="mt-5">
          <span className="px-3 py-2 rounded border-2 mr-5">{remote_or_onsite}</span>
          <span className="px-3 py-2 rounded border-2">{job_type}</span>
        </div>
        <div className="flex justify-between items-center mt-5">
          <p className="flex items-center gap-1">
            <img src={Location} alt="" /><span>{location}</span>
          </p>
          <p className="flex items-center gap-1">
            <img src={Money} alt="" /><span>{salary}</span>
          </p>
        </div>
        <div className="mt-5">
          <button onClick={handleJobDetails} className="btn btn-primary rounded">View Details</button>
        </div>
      </div>
    </div>
  )
}

export default JobCard;

JobCard.propTypes = {
  job: PropTypes.object
}