import Header from "@/components/Header";
import HomeAbout from "@/components/HomeAbout/HomeAbout";
import HomeProject from "@/components/Projects/HomeProject";
import Testimonial from "@/components/Testimonial";

export default function Home() {
  return (
    <div>
      <Header />
      <HomeAbout />
      <HomeProject />
      <Testimonial />
    </div>
  );
}
