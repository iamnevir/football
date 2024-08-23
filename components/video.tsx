const VideoComponent = ({id}:{id:string}) => {
  // const url = "https://utfs.io/f/1c6d3fd9-d63c-44b4-b27d-c4e5c62264e9-xzpxms.mp4"
  const url = "https://makevos.com/storage/videos/ef43de.mp4";
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "0 auto",
        padding: "10px",
      }}
    >
      <div>
        <video controls style={{ width: "100%", height: "auto" }}>
          <source src={`https://makevos.com/storage/videos/${id}.mp4`} type="video/mp4" />
        </video>
        {/* <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/ly36kn0ug4k?si=bthTCrpntrWM6Axp"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe> */}
      </div>
    </div>
  );
};

export default VideoComponent;
