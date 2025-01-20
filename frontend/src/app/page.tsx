import ProjectCarts from "@/components/Projects/ProjectCarts";
import { Button } from "@/components/ui/button";
import GlowingText from "@/components/ui/TextHeilight";
import { TProject } from "@/types/project.interface";

export default function Home() {
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
    <div>
      <h1 className="text-3xl font-bold text-center mt-10">
        Home <GlowingText text="Hello" />
      </h1>
      <Button className="">Button</Button>
      <Button variant="secondary">Button</Button>
      <ProjectCarts projects={projects} />
    </div>
  );
}
