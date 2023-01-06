import { Project } from "../../components/Work/projectData";

function ProjectHeader({ project }: { project: Project }) {
  return (
    <div className="w-full h-full flex flex-col gap-4 justify-start p-8 pt-32">
      <div className="md:w-1/2 flex flex-col items-start justify-between gap-4">
        <div className="w-full h-full flex flex-col">
          <h1 className="text-title-mobile text-dark md:text-title md:text-dark  whitespace-normal break-normal hyphens-auto">
            {project?.name}
          </h1>
          <h3 className="text-subtitle-mobile text-dark md:text-dark md:text-subtitle">
            {project?.yearStart} {project?.location}
          </h3>
        </div>
        <div className="w-full h-full">
          <p className="text-paragraph text-dark">{project?.description}</p>
        </div>
      </div>
    </div>
  );
}

export default ProjectHeader;
