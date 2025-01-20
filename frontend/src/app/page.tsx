// import { TProject } from "@/types/project.interface";

import Header from "@/components/Header";
import HomeAbout from "@/components/HomeAbout/HomeAbout";

export default function Home() {
  // const projects: TProject[] = [
  //   {
  //     id: "1",
  //     title: "Brand Journey Improvements",
  //     client: "Client 1",
  //     image: "/Img.png",
  //     work: "Work 1",
  //   },
  //   {
  //     id: "2",
  //     title: "Brand Grouping",
  //     client: "Client 2",
  //     image: "/Img2.png",
  //     work: "Work 2",
  //   },
  //   {
  //     id: "3",
  //     title: "NFT Glimps",
  //     client: "Client 3",
  //     image: "/Img3.png",
  //     work: "Work 3",
  //   },
  //   {
  //     id: "4",
  //     title: "Brand Suggestions",
  //     client: "Client 4",
  //     image: "/Img4.png",
  //     work: "Work 4",
  //   },
  // ];

  return <div>
    <Header />
    <HomeAbout />
  </div>;
}
