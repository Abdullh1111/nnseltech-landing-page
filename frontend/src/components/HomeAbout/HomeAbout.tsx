import HomeAboutLeft from "./HomeAboutLeft";
import HomeAboutRight from "./HomeAboutRight";

export default function HomeAbout() {
  return (
    <div className="flex flex-col-reverse md:flex-row gap-10 lg:mt-56 mt-20">
      <HomeAboutLeft className="flex-1" />
      <HomeAboutRight className="" />
    </div>
  )
}
