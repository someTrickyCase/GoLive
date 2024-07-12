import "./Menu.css";

export default function Menu({ buttonToSongListHendler }) {
  function accordeonItemHendler() {
    console.log("OWO");
  }

  return (
    <section className="menu-section">
      <h1>Меню</h1>
      <div className="accordeon-container">
        <div className="accordeon-item">
          <div onClick={accordeonItemHendler} className="accordeon-item-title">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="size-5"
            >
              <path d="M6.3 2.84A1.5 1.5 0 0 0 4 4.11v11.78a1.5 1.5 0 0 0 2.3 1.27l9.344-5.891a1.5 1.5 0 0 0 0-2.538L6.3 2.841Z" />
            </svg>
            <p>Добавить песню</p>
          </div>
          <div className="accordeon-options hide">
            <input
              className="input input-song-name"
              placeholder="название"
              type="text"
            />
            <input
              className="input input-song-key-of"
              placeholder="тональность"
              type="text"
            />
            <button className="button button-add"></button>
          </div>
        </div>
      </div>
      <p className="footer">@someTrickyCase</p>
      <p className="description">
        Тут будет можно добавить свои песни (пока только название и
        тональность). <br /> Я бы сделал это сейчас, но сон оказался
        сильнее😴😴😴
      </p>
      <button className="button button-back" onClick={buttonToSongListHendler}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="size-5"
        >
          <path d="M7.712 4.818A1.5 1.5 0 0 1 10 6.095v2.972c.104-.13.234-.248.389-.343l6.323-3.906A1.5 1.5 0 0 1 19 6.095v7.81a1.5 1.5 0 0 1-2.288 1.276l-6.323-3.905a1.505 1.505 0 0 1-.389-.344v2.973a1.5 1.5 0 0 1-2.288 1.276l-6.323-3.905a1.5 1.5 0 0 1 0-2.552l6.323-3.906Z" />
        </svg>
      </button>
    </section>
  );
}
