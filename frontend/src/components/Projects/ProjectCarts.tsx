import { TProject } from "@/types/project.interface";
import Image from "next/image";

type props = {
  projects: TProject[];
};

export default function ProjectCarts({ projects }: props) {
  console.log(projects);
  return (
    <div className="md:grid grid-cols-2 gap-10">
      {projects.map((project) => (
        <div key={project.id} className="flex flex-col gap-5 mt-10 border border-transparent hover:border-secondary lg:p-10 p-5">
          <Image
            src={project.image}
            alt={project.title}
            width={580}
            height={600}
          />
          <h2 className="text-2xl font-bold flex gap-5 items-center">{project.title} <div className="w-10 h-[2px] bg-secondary"></div></h2>
          <p><span className="text-[#606060] mr-5">Client:</span> {project.client}</p>
          <p><span className="text-[#606060] mr-6">Work:</span> {project.work}</p>
        </div>
      ))}
    </div>
  );
}
