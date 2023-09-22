import Banner from "../Banner/Banner";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";

const Home = () => {
  return (
    <>
      <main className="max-w-screen-xl mx-auto p-3">
        <Banner></Banner>
        <FeaturedJobs></FeaturedJobs>
      </main>
    </>
  )
}

export default Home;