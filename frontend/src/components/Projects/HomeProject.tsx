"use client";
import { TProject } from "@/types/project.interface";
import ProjectCarts from "./ProjectCarts";
import TextHeilight from "../ui/TextHeilight";
import { GrLinkNext } from "react-icons/gr";
import { Button } from "../ui/button";
import { useGetAllProjectQuery } from "@/redux/services/project";
export default function HomeProject() {
  const { data, isLoading } = useGetAllProjectQuery();
  console.log(data);
  const projects: TProject[] = [
    {
      id: 1,
      name: "Brand Journey Improvements",
      client: "Client 1",
      mainImage: "/Img.png",
      work: "Work 1",
    },
    {
      id: 2,
      name: "Brand Grouping",
      client: "Client 2",
      mainImage: "/Img2.png",
      work: "Work 2",
    },
    {
      id: 3,
      name: "NFT Glimps",
      client: "Client 3",
      mainImage: "/Img3.png",
      work: "Work 3",
    },
    {
      id: 4,
      name: "Brand Suggestions",
      client: "Client 4",
      mainImage: "/Img4.png",
      work: "Work 4",
    },
  ];

  return (
    <div>
      {isLoading ? (
        <p>Loading</p>
      ) : (
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
      )}
    </div>
  );
}
