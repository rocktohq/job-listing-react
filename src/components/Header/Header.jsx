import { NavLink } from "react-router-dom";

const Header = () => {

  const links = <>
    <li><NavLink to="/"><span className="btn btn-ghost text-xl font-medium rounded">Home</span></NavLink></li>
    <li><NavLink to="/statistics"><span className="btn btn-ghost text-xl font-medium rounded">Statistics</span></NavLink></li>
    <li><NavLink to="/applied-jobs"><span className="btn btn-ghost text-xl font-medium rounded">Applied Jobs</span></NavLink></li>
    <li><NavLink to="/blog"><span className="btn btn-ghost text-xl font-medium rounded">Blog</span></NavLink></li>
  </>;

  return (
    <header className="mx-auto p-3">
      <div className="navbar max-w-screen-xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-xl font-medium">
              {links}
            </ul>
          </div>
          <NavLink to="/" className="text-3xl font-bold">Job<span className="text-primary">Listing</span></NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu-horizontal px-1 text-xl font-medium">
            {links}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn btn-primary rounded">Apply Now</a>
        </div>
      </div>
    </header>
  )
}

export default Header;