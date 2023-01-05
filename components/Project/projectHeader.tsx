import Image from "next/image";
import { Project } from "../../components/Work/projectData";
import IsMobileContext from "../Common/IsMobileContext";
import { useContext } from "react";

function ProjectHeader({ project }: { project: Project }) {
  const { isMobile, setIsMobile } = useContext(IsMobileContext);
  return (
    <div className="w-full h-full md:h-screen flex flex-col gap-4 justify-end p-8 pt-32">
      {isMobile && (
        <div className="h-1/2 md:h-full w-full relative">
          <Image
            key={project?.name}
            src={project?.images[0]}
            alt={project?.name + "0"}
            fill
            priority
            quality={100}
            style={{
              objectFit: "cover",
            }}
            sizes="100vw"
          />
        </div>
      )}
      <div className="w-full h-min flex flex-col md:flex-row items-start justify-between gap-4">
        <div className="w-full md:w-5/12 h-full flex flex-col">
          <h1 className="text-title text-dark text-6xl md:text-8xl whitespace-normal break-normal hyphens-auto">
            {project?.name}
          </h1>
          <h3 className="text-subtitle text-dark ">
            {project?.yearStart} {project?.location}
          </h3>
        </div>
        <div className="w-full md:w-1/2 h-full">
          <p className="text-subtitle text-dark text-xl md:text-3xl">
            {project?.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProjectHeader;
