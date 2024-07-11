import "./SetList.css";
import Song from "../Song/Song.jsx";
import FontSizeBar from "../FontSizeBar/FontSizeBar.jsx";
import { useState } from "react";
import { DATA } from "../../data/data.js";
import {
  closestCorners,
  DndContext,
  KeyboardSensor,
  PointerSensor,
  TouchSensor,
  useSensors,
  useSensor,
} from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
  arrayMove,
  sortableKeyboardCoordinates,
} from "@dnd-kit/sortable";

export default function SetList({ setList, buttonBackHendler, indexGetter }) {
  const stateObject = [];

  setList.map((index) => {
    stateObject.push({
      id: index + 1,
      title: DATA[index].songName,
    });
  });

  const [songs, setSongs] = useState(stateObject);
  const [fontSizeValue, setFontSizeValue] = useState(26)

  const getSongPosition = (id) => songs.findIndex((song) => song.id === id);

  function dragEndHendler(event) {
    const { active, over } = event;
    if (active.id === over.id) return;

    setSongs((songs) => {
      const originPosition = getSongPosition(active.id);
      const newPosition = getSongPosition(over.id);

      return arrayMove(songs, originPosition, newPosition);
    });
  }

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  function buttonDeleteHendler(event) {
    const button = event.target.closest("button");
    if (!button) return;
    console.log(button.parentElement.querySelector(".pharagraph").textContent);
    const newState = stateObject.filter(
      (element) =>
        element.title !==
        button.parentElement.querySelector(".pharagraph").textContent
    );
    setSongs(newState);

    DATA.map((item) => {
      if (
        item.songName ===
        button.parentElement.querySelector(".pharagraph").textContent
      ) {
        indexGetter(DATA.indexOf(item));
      }
    });
  }

  function buttonCopyHendler() {
    let text = ""
    const songs = document.querySelectorAll(".song")
    for(let i = 0; i<songs.length; i++) {
      text += `${songs[i].textContent} \n`
    }
    console.log(text)
    navigator.clipboard.writeText(text)
  }

  function fontSizeChanger(event) {
    const newValue = event.target.value
    const container = document.querySelector(".scrollable-inner")
    console.log(newValue)
    container.style.fontSize = `${event.target.value}px`
    setFontSizeValue(newValue)
  }

  return (
    <section className="set-list-section">
      <FontSizeBar onChangeHandler={fontSizeChanger}/>
      <h1>Сет на сейчас💥</h1>
      <div className="scrollable-inner">
      <DndContext
        sensors={sensors}
        onDragEnd={(e) => dragEndHendler(e)}
        collisionDetection={closestCorners}
      >
        <SortableContext items={songs} strategy={verticalListSortingStrategy}>
          {songs.map((song) => (
            <Song
              key={song.id}
              id={song.id}
              title={song.title}
              buttonDeleteHendler={buttonDeleteHendler}
            />
          ))}
        </SortableContext>
      </DndContext>
      </div>
      <button className="button button-back" onClick={buttonBackHendler}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="size-5"
        >
          <path d="M7.712 4.818A1.5 1.5 0 0 1 10 6.095v2.972c.104-.13.234-.248.389-.343l6.323-3.906A1.5 1.5 0 0 1 19 6.095v7.81a1.5 1.5 0 0 1-2.288 1.276l-6.323-3.905a1.505 1.505 0 0 1-.389-.344v2.973a1.5 1.5 0 0 1-2.288 1.276l-6.323-3.905a1.5 1.5 0 0 1 0-2.552l6.323-3.906Z" />
        </svg>
      </button>
      <button className="button button-copy" onClick={buttonCopyHendler}>
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
            d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5A3.375 3.375 0 0 0 6.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0 0 15 2.25h-1.5a2.251 2.251 0 0 0-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 0 0-9-9Z"
          />
        </svg>
      </button>
    </section>
  );
}
