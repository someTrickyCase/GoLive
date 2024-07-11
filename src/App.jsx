import SongsList from "./components/SongsList/SongsList.jsx";
import SetList from "./components/SetList/SetList.jsx";
import { useState, useRef } from "react";
import "./App.css";

function App() {
  const [isCreated, setIsCreated] = useState(false);
  const refSetList = useRef([]);

  function toSetList() {
    setIsCreated(true);
  }

  function toSongsList() {
    setIsCreated(false);
  }

  function getSongIndex(indexOfSong) {
    const value = Number(indexOfSong);
    if (!refSetList.current.includes(value)) {
      refSetList.current.push(value);
    } else {
      refSetList.current.splice(refSetList.current.indexOf(value), 1);
    }
  }

  function getIndexToDelete(value) {
    refSetList.current.splice(refSetList.current.indexOf(value), 1)
  }

  if (!isCreated) {
    return (
      <SongsList
        setList={refSetList.current}
        indexGetter={getSongIndex}
        buttonDoneHendler={toSetList}
      />
    );
  } else {
    return (
      <SetList
        setList={refSetList.current}
        indexGetter={getIndexToDelete}
        buttonBackHendler={toSongsList}
      />
    );
  }
}

export default App;
