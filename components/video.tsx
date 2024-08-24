"use client";

import AdComponent from "./ads";

const VideoComponent = ({ id, ads }: any) => {
  console.log(ads);
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
      {ads.map((item: any) => (
        <AdComponent
          key={item.zoneId}
          className={item.className}
          zoneId={item.zoneId}
        />
      ))}
    </div>
  );
};

export default VideoComponent;
