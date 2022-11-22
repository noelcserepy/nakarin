export default function Home() {
  return (
    <div
        className="relative h-full"
        style={{ transformStyle: "preserve-3d", zIndex: "-1" }}
      >
        <div
          className="h-screen w-screen"
          style={{
            transform: "translateZ(-10px)",
            position: "absolute",
            zIndex: "-1",
          }}
        >
        <div
          style={{
            transform: "translateZ(-5px)",
            position: "absolute",
            zIndex: "-1",
          }}
        >
        <div style={{ transform: "translateZ(-5px)" }}></div>
      </div>
    </div>
  );
}
