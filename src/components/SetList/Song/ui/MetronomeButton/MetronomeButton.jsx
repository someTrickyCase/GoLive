import "./MetronomeButton.css";
import { useState } from "react";
import { DATA } from "../../../../../data/data";

export default function MetronomeButton({ id }) {
  const [isMetronomeActive, setIsMetronomeActive] = useState(false);

  const audio = new Audio();
  audio.src = "public/click.wav";

  function playClick() {
    audio.play();
  }

  function setBlinking() {
    document.documentElement.style.setProperty("--tick", `${60 / DATA[id - 1].tempo}s`);
  }

  function ticking(bool) {
    if (!DATA[id - 1].tempo) return;

    if (!bool) {
      setInterval(() => playClick(), (60 / DATA[id - 1].tempo) * 1000);
      setBlinking();
    } else {
      for (let i = 0; i < 1000; i++) {
        clearInterval(i);
      }
    }
  }

  function handleMetronomeButton() {
    if (!DATA[id - 1].tempo) return;
    setIsMetronomeActive(!isMetronomeActive);
    ticking(isMetronomeActive);
  }

  return (
    <button
      className={`button button-metronome ${isMetronomeActive ? "metronome-animation" : undefined}`}
      onTouchStart={handleMetronomeButton}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        stroke-width='1.5'
        stroke='currentColor'>
        <path
          stroke-linecap='round'
          stroke-linejoin='round'
          d='M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z'
        />
      </svg>
    </button>
  );
}
