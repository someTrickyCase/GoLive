import { DATA } from "../../data/data.js";
import { useState } from "react";
import "./SongsList.css";

export default function SongsList({ setList, indexGetter, buttonDoneHendler, buttonMenuHendler }) {
  const [isSelected, setIsSelected] = useState(false);

  function clickHendler(event) {
    if (event.target.classList.contains("selected-song")) {
      event.target.classList.remove("selected-song");
      setIsSelected(false);
    } else {
      event.target.classList.add("selected-song");
      setIsSelected(true);
    }
    indexGetter(event.target.getAttribute("index"));
  }

  return (
    <section className="songs-list-section">
      <h1>список</h1>
      <div className="scrollable-inner">
        {DATA.map((song) => (
          <div
            onClick={(event) => {
              clickHendler(event);
            }}
            key={DATA.indexOf(song)}
            index={DATA.indexOf(song)}
            className={`song-name ${
              setList?.includes(DATA.indexOf(song))
                ? "selected-song"
                : undefined
            }`}
          >
            {song.songName}
          </div>
        ))}
      </div>
      <button className="button button-done" onClick={buttonDoneHendler}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="size-5"
        >
          <path
            fillRule="evenodd"
            d="M2 10a8 8 0 1 1 16 0 8 8 0 0 1-16 0Zm6.39-2.908a.75.75 0 0 1 .766.027l3.5 2.25a.75.75 0 0 1 0 1.262l-3.5 2.25A.75.75 0 0 1 8 12.25v-4.5a.75.75 0 0 1 .39-.658Z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <button className="button button-menu" onClick={buttonMenuHendler}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
          />
        </svg>
      </button>
    </section>
  );
}
