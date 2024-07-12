import SongsList from "./components/SongsList/SongsList.jsx";
import SetList from "./components/SetList/SetList.jsx";
import Menu from "./components/Menu/Menu.jsx";
import { useState, useRef } from "react";
import "./App.css";

function App() {
  const [isMenu, setIsMenu] = useState(false);
  const [isSetList, setIsSetList] = useState(false);
  const [isSongList, setIsSongList] = useState(true);
  const refSetList = useRef([]);

  function toSongsList() {
    setIsSongList(true);
    setIsSetList(false);
    setIsMenu(false);
  }

  function toSetList() {
    setIsSongList(false);
    setIsSetList(true);
    setIsMenu(false);
  }

  function toMenu() {
    setIsSongList(false);
    setIsSetList(false);
    setIsMenu(true);
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
    refSetList.current.splice(refSetList.current.indexOf(value), 1);
  }

  if (isSongList) {
    return (
      <SongsList
        setList={refSetList.current}
        indexGetter={getSongIndex}
        buttonDoneHendler={toSetList}
        buttonMenuHendler={toMenu}
      />
    );
  }
  if (isSetList) {
    return (
      <SetList
        setList={refSetList.current}
        indexGetter={getIndexToDelete}
        buttonToSongListHendler={toSongsList}
      />
    );
  }
  if (isMenu) {
    return <Menu buttonToSongListHendler={toSongsList}/>;
  }
}

export default App;
