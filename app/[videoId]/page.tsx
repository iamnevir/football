import VideoComponent from "@/components/video";

const VideoPage = ({ params }: { params: { videoId: string } }) => {
  if (!params.videoId) {
    return null;
  }
  return <VideoComponent id={params.videoId} />;
};

export default VideoPage;
