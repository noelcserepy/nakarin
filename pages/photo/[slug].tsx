import { useRouter } from "next/router";
import projectData from "../../components/Work/projectData";

export async function getStaticPaths() {
  const paths = projectData.map((project) => ({
    params: { slug: project.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }: { params: any }) {
  const project = projectData.find((project) => project.slug === params.slug);

  return {
    props: {
      project,
    },
  };
}

function Project({ project }: { project: any }) {
  const router = useRouter();
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-light">
      <div className="text-title text-dark">{project.name}</div>;
    </div>
  );
}

export default Project;
