import Image, { StaticImageData } from "next/image";
import { Project } from "../../components/Work/projectData";
import { ScrollerMotion } from "scroller-motion";
import Nav from "../../components/Nav/nav";
import projectData from "../../components/Work/projectData";

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
  const portraits: StaticImageData[] = [];
  const landscapes: StaticImageData[][] = [];
  const doubles: any = [];

  project?.images.map((image) => {
    if (image.width > image.height) {
      landscapes.push([image]);
      return;
    }
    portraits.push(image);
  });

  for (let i = 0; i < portraits.length; i++) {
    if (portraits[i] && portraits[i + 1]) {
      doubles.push([portraits[i], portraits[i + 1]]);
      i++;
      continue;
    }
    doubles.push([portraits[i]]);
  }

  // merge doubles and landscapes
  const merged = [];

  for (let i = 0; i < Math.max(doubles.length, landscapes.length) - 1; i++) {
    if (doubles[i]) {
      merged.push(doubles[i]);
    }
    if (landscapes[i]) {
      merged.push(landscapes[i]);
    }
    if (!doubles[i] && !landscapes[i]) {
      break;
    }
  }

  return (
    <>
      <Nav back dark />
      <ScrollerMotion
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
            <div className="w-full h-screen flex flex-col gap-4 justify-end p-8 pt-32">
              <div className="h-full w-full relative">
                <Image
                  key={project?.name}
                  src={project?.images[7]}
                  alt={project?.name + "0"}
                  fill
                  priority
                  quality={100}
                  style={{
                    objectFit: "cover",
                  }}
                />
              </div>
              <div className="w-full h-min flex items-start justify-between ">
                <div className="w-5/12 h-full flex flex-col">
                  <h1 className="text-title text-dark">{project?.name}</h1>
                  <h3 className="text-subtitle text-dark ">
                    {project?.yearStart} {project?.location}
                  </h3>
                </div>
                <div className="w-1/2 h-full">
                  <p className="text-subtitle text-dark">
                    {project?.description}
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full h-full flex flex-col gap-4 justify-end p-8 pt-32">
              <div className="h-full w-[70%] flex flex-col gap-16 items-center">
                {merged.map((arr, index) => {
                  if (arr.length === 2) {
                    return (
                      <div
                        className="w-full h-[60vh] flex justify-start gap-4"
                        key={index}
                      >
                        <div className={`h-full w-full relative`} key={index}>
                          <Image
                            src={arr[0]}
                            alt={project?.name + index}
                            fill
                            style={{
                              objectFit: "contain",
                              objectPosition: "left",
                            }}
                          />
                        </div>
                        <div className="w-full h-full relative" key={index}>
                          <Image
                            src={arr[1]}
                            alt={project?.name + index}
                            fill
                            style={{
                              objectFit: "contain",
                              objectPosition: "right",
                            }}
                          />
                        </div>
                      </div>
                    );
                  } else {
                    return (
                      <div className="w-full h-[60vh] relative" key={index}>
                        <Image
                          src={arr[0]}
                          alt={project?.name + index}
                          fill
                          style={{
                            objectFit: "contain",
                            objectPosition: "left",
                          }}
                        />
                      </div>
                    );
                  }
                })}
              </div>
            </div>
          </div>
        </div>
      </ScrollerMotion>
    </>
  );
}

export default Project;
