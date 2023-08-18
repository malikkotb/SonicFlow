import Sidebar from "@/components/Sidebar";
import TopBar from "@/components/TopBar";
import Tracks from "@/components/Tracks";

export default function Home() {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="w-full">
          <TopBar />
          <div className="p-8 flex gap-4">
            <Tracks />
          </div>
        </div>
      </div>
    </>
  );
}
