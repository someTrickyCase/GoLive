import "./SongInfo.css";
import { DATA } from "../../data/data";
import { useRef } from "react";

export default function SongInfo({ buttonToSetListHendler, refID }) {
  const textareaRef = useRef(null);
  const title = DATA[refID - 1].songName;
  const keyOf = DATA[refID - 1].keyOf;

  function changeInfo() {
    DATA[refID - 1].additionalInfo = textareaRef.current.value;
  }

  return (
    <section className='song-info-section'>
      <h1 className='title'>
        {title}
        <span> {keyOf}</span>
      </h1>
      <textarea
        ref={textareaRef}
        onInput={changeInfo}
        defaultValue={DATA[refID - 1].additionalInfo ? DATA[refID - 1].additionalInfo : undefined}
        autoFocus={false}
        spellCheck={false}
        className='text-area'
      />
      <button className='button button-back' onClick={buttonToSetListHendler}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 20 20'
          fill='currentColor'
          className='size-5'>
          <path d='M7.712 4.818A1.5 1.5 0 0 1 10 6.095v2.972c.104-.13.234-.248.389-.343l6.323-3.906A1.5 1.5 0 0 1 19 6.095v7.81a1.5 1.5 0 0 1-2.288 1.276l-6.323-3.905a1.505 1.505 0 0 1-.389-.344v2.973a1.5 1.5 0 0 1-2.288 1.276l-6.323-3.905a1.5 1.5 0 0 1 0-2.552l6.323-3.906Z' />
        </svg>
      </button>
    </section>
  );
}
