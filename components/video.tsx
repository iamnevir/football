const VideoComponent = ({ id }: any) => {
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
      <video
        controls
        style={{ width: "75%", height: "auto", maxHeight: "80%" }}
      >
        <source
          src={`https://makevos.com/storage/videos/${id}.mp4`}
          type="video/mp4"
        />
      </video>
    </div>
  );
};

export default VideoComponent;
