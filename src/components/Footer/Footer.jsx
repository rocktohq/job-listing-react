import Social from "../../assets/icons/social.png";

const Footer = () => {
  return (
    <footer className="py-10 bg-black text-white">
      <div className="flex justify-between max-w-screen-xl mx-auto px-3">
        <aside>
          <img src={Social} alt="" />
          <p>ACME Industries Ltd.<br />Providing reliable tech since 1992</p>
        </aside>
        <nav className="flex flex-col">
          <header className="footer-title">Services</header>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav className="flex flex-col">
          <header className="footer-title">Company</header>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav className="flex flex-col">
          <header className="footer-title">Legal</header>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </div>
      <hr className="max-w-screen-xl mx-auto my-2 px-3" />
      <div className="max-w-screen-xl mx-auto p-3 flex justify-between items-center">
        <p>Hello</p>
        <p>&copy; JobListing&trade; 2023</p>
      </div>
    </footer>
  )
}

export default Footer;