"use client";
import Sidebar from "@/components/Sidebar";
import TopBar from "@/components/TopBar";
import Tracks from "@/components/Tracks";
import { useState } from "react";

const tracks = [
  {
    id: 1,
    src: "track1.mp3",
    title: "Childs Play",
    artist: "Drake",
    album: "Views",
    imgSrc: "https://unsplash.it/40/40",
    duration: "4:01",
  },
  {
    id: 2,
    src: "track2.mp3",
    title: "Lost",
    artist: "Frank Ocean",
    album: "channel Orange",
    imgSrc: "https://unsplash.it/40/40",
    duration: "3:48",
  },
  {
    id: 3,
    src: "track3.mp3",
    title: "Know Yourself",
    artist: "Drake",
    album: "If you're reading this",
    imgSrc: "https://unsplash.it/40/40",
    duration: "3:25",
  },
  {
    id: 4,
    src: "track4.mp3",
    title: "Tuscan Leather",
    artist: "Drake",
    album: "Nothing was the Same",
    imgSrc: "https://unsplash.it/40/40",
    duration: "6:06",
  },
];

export default function Home() {
  const [selectedHowl, setSelectedHowl] = useState(null);
  const [playing, setPlaying] = useState(false);

  // for getting title, artist, imgSrc for Sidebar
  const [currentTrack, setCurrentTrack] = useState(null);

  return (
    <>
      <div className="flex">
        <Sidebar
          playing={playing}
          setPlaying={setPlaying}
          selectedHowl={selectedHowl}
          currentTrack={currentTrack}
        />
        <div className="w-full">
          <TopBar />
          <div className="p-8 pb-0 flex gap-4">
            <Tracks
              currentTrack={currentTrack}
              setCurrentTrack={setCurrentTrack}
              tracks={tracks}
              playing={playing}
              setPlaying={setPlaying}
              selectedHowl={selectedHowl}
              setSelectedHowl={setSelectedHowl}
            />
          </div>
        </div>
      </div>
    </>
  );
}
