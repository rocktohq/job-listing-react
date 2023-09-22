import { NavLink } from "react-router-dom"

const ErrorPage = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="p-10 shadow-lg rounded-md bg-base-200">
        <h1 className="text-4xl font-bold text-center">Opps!!</h1>
        <p className="text-xl my-5">The page you are looking for, is not found!</p>
        <div className="text-center">
          <NavLink to="/"><button className="btn btn-primary rounded">Go Back to Home</button></NavLink>
        </div>
      </div>
    </div>
  )
}

export default ErrorPage
