import { useRouter } from "next/router";

function Project() {
  const router = useRouter();
  const { pid } = router.query;
  return <div className="text-dark">{pid}</div>;
}

export default Project;
