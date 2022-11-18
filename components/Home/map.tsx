import Image from "next/image";
import zhmap from "../../public/zh_map.svg";

function Map() {
  return (
    <div className="absolute w-1/2 h-full">
      <Image
        alt="Map of Zürich"
        src={zhmap}
        priority
        fill
        style={{ objectFit: "contain", objectPosition: "top left" }}
        className="bottom-0 left-1/2"
      />
      <div className="font-switzer text-2xl text-white absolute left-1/4 top-1/3">
        Based in Zürich
      </div>
    </div>
  );
}

export default Map;
