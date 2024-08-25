import dynamic from "next/dynamic";

// Import dạng dynamic cho VideoComponent
const VideoComponent = dynamic(() => import("@/components/video"), {
  ssr: false, // Tùy chọn này có thể tắt render phía server nếu cần
});
const getAdData = (envVar: any) => {
  const [className, zoneId] = envVar.split("|");
  return { className, zoneId };
};
const VideoPage = ({ params }: { params: { videoId: string } }) => {
  const adKeys = Object.keys(process.env).filter((key) =>
    key.startsWith("NEXT_PUBLIC_AD_")
  );
  const ads = adKeys.map((key) => {
    const envVar = process.env[key];
    const { className, zoneId } = getAdData(envVar);
    return { className, zoneId };
  });
  if (!params.videoId) {
    return null;
  }

  return (
    <></>
    // <VideoComponent id={params.videoId} ads={ads} />
  );
};

export default VideoPage;
