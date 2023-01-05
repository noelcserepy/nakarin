import Image, { StaticImageData } from "next/image";
import { Project } from "../../components/Work/projectData";
import { useContext } from "react";
import IsMobileContext from "../Common/IsMobileContext";

function ProjectMedia({ project }: { project: Project }) {
  const { isMobile, setIsMobile } = useContext(IsMobileContext);

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
    <div className="w-full h-full flex flex-col gap-4 justify-end items-center p-8  md:pt-32">
      <div className="h-full w-full md:w-[70%] flex flex-col gap-4 md:gap-16 items-center">
        {merged.map((arr: any, index: number) => {
          if (!isMobile && arr.length === 2) {
            return (
              <div
                className="w-full h-full md:h-[60vh] flex justify-start gap-4"
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
                    sizes="50vw"
                  />
                </div>
                <div className="w-full h-full relative" key={index + "b"}>
                  <Image
                    src={arr[1]}
                    alt={project?.name + index}
                    fill
                    style={{
                      objectFit: "contain",
                      objectPosition: "right",
                    }}
                    sizes="50vw"
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
                    objectPosition: "0 0",
                  }}
                  sizes="100vw"
                />
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

export default ProjectMedia;
