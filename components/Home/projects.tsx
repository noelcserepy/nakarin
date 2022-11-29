import Image from "next/image";
import movieReel from "../../public/movie_reel.svg";
import carousel from "../../public/carousel.svg";

function Projects() {
  return (
    <div className="h-[100vh] flex justify-center items-center ">
      <div className="flex w-screen h-[90vh] relative">
        <div className="w-screen h-full overflow-clip flex justify-end absolute -translate-x-1/2">
          <Image
            alt="Movie reel illustration."
            src={movieReel}
            className="h-full translate-x-1/2"
          />
          <h3 className="font-extrabold text-6xl text-light absolute top-1/2 right-1/4 -translate-y-1/2 -translate-x-1/2">
            Video
          </h3>
        </div>
        <div className="h-full w-0 border-l-2 border-beige absolute left-1/2 " />
        <div className="w-screen h-full overflow-clip absolute translate-x-1/2">
          <Image
            alt="Dia show carousel illustration."
            src={carousel}
            className="h-full -translate-x-1/2"
          />
          <h3 className="font-extrabold text-6xl text-light absolute top-1/2 left-1/4 -translate-y-1/2 translate-x-1/2">
            Photo
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Projects;
