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

export default function SetList({
  setList,
  updateSetList,
  buttonToSongListHendler,
  buttonToSongInfoHandler,
  indexGetter,
}) {
  const stateObject = [];

  setList.map((index) => {
    stateObject.push({
      id: index + 1,
      title: DATA[index].songName,
    });
  });

  const [songs, setSongs] = useState(stateObject);
  const [fontSizeValue, setFontSizeValue] = useState(26);

  const getSongPosition = (id) => songs.findIndex((song) => song.id === id);

  function dragEndHendler(event) {
    if (event.activatorEvent.srcElement.closest("button")) return;

    const { active, over } = event;
    if (active.id === over.id) return;

    setSongs((songs) => {
      const originPosition = getSongPosition(active.id);
      const newPosition = getSongPosition(over.id);

      updateSetList(arrayMove(songs, originPosition, newPosition));
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

    const title = button.parentElement.children[0].textContent;
    setSongs((prev) => prev.filter((item) => item.title !== title));

    DATA.map((item) => {
      if (item.songName === button.parentElement.querySelector(".pharagraph").textContent) {
        indexGetter(DATA.indexOf(item));
      }
    });
  }

  function buttonShowAddInfoHandler(id) {
    buttonToSongInfoHandler(id);
  }

  function buttonCopyHendler() {
    let text = "";
    const songs = document.querySelectorAll(".song");
    for (let i = 0; i < songs.length; i++) {
      text += `${songs[i].textContent} \n`;
    }
    navigator.clipboard.writeText(text);
  }

  function fontSizeChanger(event) {
    const newValue = event.target.value;
    const container = document.querySelector(".scrollable-inner");
    container.style.fontSize = `${event.target.value}px`;
    setFontSizeValue(newValue);
  }

  let tick;
  const click = new Audio();
  click.src = "public/click.wav";

  function metronome() {
    click.play();
  }

  function handleMetronome(id, isActive) {
    if (DATA[id--].tempo) return;
    const timeDelta = 60 / DATA[id--].tempo;
    if (isActive) {
      clearInterval(tick);
      tick = null;
    } else {
      tick = setInterval(() => {
        metronome();
      }, timeDelta * 1000);
    }
  }

  return (
    <section className='set-list-section'>
      <FontSizeBar onChangeHandler={fontSizeChanger} />
      <h1>Сет на сейчас💥</h1>
      <div className='scrollable-inner'>
        <DndContext
          sensors={sensors}
          onDragEnd={(e) => dragEndHendler(e)}
          collisionDetection={closestCorners}>
          <SortableContext items={songs} strategy={verticalListSortingStrategy}>
            {songs.map((song) => (
              <Song
                key={song.id}
                id={song.id}
                title={song.title}
                buttonDeleteHendler={buttonDeleteHendler}
                buttonShowAddInfoHandler={buttonShowAddInfoHandler}
                buttonMetronomeHandler={handleMetronome}
              />
            ))}
          </SortableContext>
        </DndContext>
      </div>
      <button className='button button-back' onClick={buttonToSongListHendler}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 20 20'
          fill='currentColor'
          className='size-5'>
          <path d='M7.712 4.818A1.5 1.5 0 0 1 10 6.095v2.972c.104-.13.234-.248.389-.343l6.323-3.906A1.5 1.5 0 0 1 19 6.095v7.81a1.5 1.5 0 0 1-2.288 1.276l-6.323-3.905a1.505 1.505 0 0 1-.389-.344v2.973a1.5 1.5 0 0 1-2.288 1.276l-6.323-3.905a1.5 1.5 0 0 1 0-2.552l6.323-3.906Z' />
        </svg>
      </button>
      <button className='button button-copy' onClick={buttonCopyHendler}>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor'>
          <path
            fill-rule='evenodd'
            d='M10.5 3A1.501 1.501 0 0 0 9 4.5h6A1.5 1.5 0 0 0 13.5 3h-3Zm-2.693.178A3 3 0 0 1 10.5 1.5h3a3 3 0 0 1 2.694 1.678c.497.042.992.092 1.486.15 1.497.173 2.57 1.46 2.57 2.929V19.5a3 3 0 0 1-3 3H6.75a3 3 0 0 1-3-3V6.257c0-1.47 1.073-2.756 2.57-2.93.493-.057.989-.107 1.487-.15Z'
            clip-rule='evenodd'
          />
        </svg>
      </button>
    </section>
  );
}
