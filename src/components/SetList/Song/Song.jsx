import { useState, useEffect } from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { DATA } from "../../../data/data.js";
import "./Song.css";
import MetronomeButton from "./ui/MetronomeButton/MetronomeButton.jsx";

export default function Song({ id, title, buttonDeleteHendler, buttonShowAddInfoHandler }) {
  const [isAddShowed, setIsAddShowed] = useState(false);
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });
  const styled = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  function getKeyOf(title) {
    let string = "";
    DATA.map((item) => {
      if (item.songName === title) string = item.keyOf;
    });
    return string;
  }

  return (
    <div style={styled} ref={setNodeRef} {...attributes} {...listeners} className='song-name song'>
      <p className='pharagraph'>{title}</p>
      &nbsp;
      <p className='keyOf'>{getKeyOf(title)}</p>
      <MetronomeButton id={id} />
      <button
        onTouchStart={() => buttonShowAddInfoHandler(id)}
        onPointerDown={() => buttonShowAddInfoHandler(id)}
        className='button button-show-addInfo'>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor'>
          <path
            fill-rule='evenodd'
            d='M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm0 8.625a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25ZM15.375 12a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0ZM7.5 10.875a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Z'
            clip-rule='evenodd'
          />
        </svg>
      </button>
      <button
        onTouchStart={(event) => buttonDeleteHendler(event)}
        onPointerDown={(event) => buttonDeleteHendler(event)}
        className='button button-delete'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 20 20'
          fill='currentColor'
          className='size-5'>
          <path
            fillRule='evenodd'
            d='M8.75 1A2.75 2.75 0 0 0 6 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 1 0 .23 1.482l.149-.022.841 10.518A2.75 2.75 0 0 0 7.596 19h4.807a2.75 2.75 0 0 0 2.742-2.53l.841-10.52.149.023a.75.75 0 0 0 .23-1.482A41.03 41.03 0 0 0 14 4.193V3.75A2.75 2.75 0 0 0 11.25 1h-2.5ZM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4ZM8.58 7.72a.75.75 0 0 0-1.5.06l.3 7.5a.75.75 0 1 0 1.5-.06l-.3-7.5Zm4.34.06a.75.75 0 1 0-1.5-.06l-.3 7.5a.75.75 0 1 0 1.5.06l.3-7.5Z'
            clipRule='evenodd'
          />
        </svg>
      </button>
    </div>
  );
}
