import BannerImage from "../../assets/images/user.png";

const Banner = () => {
  return (
    <section className="flex flex-col-reverse lg:flex-row justify-between items-center gap-10">
      <div className="space-y-5 flex-1">
        <h1 className="text-5xl font-bold">Lorem ipsum dolor sit amet.</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam architecto libero vel sapiente dolores ea repellat sed sint rerum delectus!</p>
      </div>
      <figure className="flex-1">
        <img src={BannerImage} alt="" />
      </figure>
    </section>
  )
}

export default Banner;