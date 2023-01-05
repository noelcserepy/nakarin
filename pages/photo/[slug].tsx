import { Project } from "../../components/Work/projectData";
import { ScrollerMotion } from "scroller-motion";
import Nav from "../../components/Nav/nav";
import projectData from "../../components/Work/projectData";
import Curtain from "../../components/Common/curtain";
import ProjectHeader from "../../components/Project/projectHeader";
import ProjectMedia from "../../components/Project/projectMedia";
import { useContext } from "react";
import IsMobileContext from "../../components/Common/IsMobileContext";

export async function getStaticPaths() {
  const paths = projectData.map((project) => ({
    params: { slug: project.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }: { params: any }) {
  const found: Project | undefined = projectData.find(
    (project) => project.slug === params.slug
  );

  const project: Project = found ? found : projectData[0];

  return {
    props: {
      project,
    },
  };
}

function Project({ project }: { project: Project }) {
  const { isMobile } = useContext(IsMobileContext);

  return (
    <>
      <Nav back dark />
      <Curtain />
      <ScrollerMotion
        disabled={isMobile}
        scale={1}
        spring={{
          stiffness: 250,
          damping: 50,
          mass: 0.4,
          restDelta: 0.5,
        }}
      >
        <div className="w-screen h-full flex justify-center bg-light">
          <div className="w-full h-full flex flex-col items-center justify-start max-w-[90rem]">
            <ProjectHeader project={project} />
            <ProjectMedia project={project} />
          </div>
        </div>
      </ScrollerMotion>
    </>
  );
}

export default Project;
