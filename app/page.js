import MusicPlayer from "@/components/MusicPlayer";
import Sidebar from "@/components/Sidebar";
import TopBar from "@/components/TopBar";
import TrendingAlbums from "@/components/TrendingAlbums";

export default function Home() {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="w-full">
          <TopBar />
          <div className="p-8 flex gap-4">
            <MusicPlayer />
            <TrendingAlbums />
          </div>
        </div>
      </div>
    </>
  );
}
