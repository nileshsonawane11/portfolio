import { useRef, useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa";

export default function VoiceIntro() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const toggleAudio = () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/intro.mp3"
        onEnded={() => setPlaying(false)}
      />

      <button
        onClick={toggleAudio}
        className="
        flex items-center justify-center gap-3
        rounded-xl
        border border-white/10
        bg-white/5
        px-5 py-3
        backdrop-blur-md
        hover:bg-white/10
        transition
        "
      >
        {playing ? <FaPause /> : <FaPlay />}

        {playing
          ? "Pause Intro"
          : "Listen to My Intro"}
      </button>
    </>
  );
}