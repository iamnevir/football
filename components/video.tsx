"use client";

import AdComponent from "./ads";

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
      <AdComponent className="eas6a97888e6" zoneId="5395330" />
      <AdComponent className="eas6a97888e17" zoneId="5395332" />
      <AdComponent className="eas6a97888e14" zoneId="5395336" />
      <AdComponent className="eas6a97888e31" zoneId="5395338" />
    </div>
  );
};

export default VideoComponent;
