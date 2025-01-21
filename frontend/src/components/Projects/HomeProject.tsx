import { TProject } from "@/types/project.interface";
import ProjectCarts from "./ProjectCarts";
import TextHeilight from "../ui/TextHeilight";
import { GrLinkNext } from "react-icons/gr";
import { Button } from "../ui/button";
export default function HomeProject() {
  const projects: TProject[] = [
    {
      id: "1",
      title: "Brand Journey Improvements",
      client: "Client 1",
      image: "/Img.png",
      work: "Work 1",
    },
    {
      id: "2",
      title: "Brand Grouping",
      client: "Client 2",
      image: "/Img2.png",
      work: "Work 2",
    },
    {
      id: "3",
      title: "NFT Glimps",
      client: "Client 3",
      image: "/Img3.png",
      work: "Work 3",
    },
    {
      id: "4",
      title: "Brand Suggestions",
      client: "Client 4",
      image: "/Img4.png",
      work: "Work 4",
    },
  ];

  return (
    <div className="lg:mt-56 mt-20 flex flex-col gap-10 justify-center">
      <h2 className="text-[64px] font-bold text-center">
        My Projects <TextHeilight text="Highlight" />
      </h2>
      <div className="flex justify-center">
        <Button>
          View All Works <GrLinkNext />
        </Button>
      </div>
      <ProjectCarts projects={projects} />
    </div>
  );
}
