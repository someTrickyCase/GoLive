import SongsList from "./components/SongsList/SongsList.jsx";
import SetList from "./components/SetList/SetList.jsx";
import Menu from "./components/Menu/Menu.jsx";
import SongInfo from "./components/SongInfo/SongInfo.jsx";
import { useState, useRef } from "react";
import "./App.css";

function App() {
  const [isSongInfo, setIsSongInfo] = useState(false);
  const [isMenu, setIsMenu] = useState(false);
  const [isSetList, setIsSetList] = useState(false);
  const [isSongList, setIsSongList] = useState(true);
  const refSetList = useRef([]);
  const refSongIndexForAddInfo = useRef(undefined);

  function toSongsList() {
    setIsSongList(true);
    setIsSetList(false);
    setIsMenu(false);
    setIsSongInfo(false);
  }

  function toSetList() {
    setIsSongList(false);
    setIsSetList(true);
    setIsMenu(false);
    setIsSongInfo(false);
  }

  function toMenu() {
    setIsSongList(false);
    setIsSetList(false);
    setIsMenu(true);
    setIsSongInfo(false);
  }

  function toSongInfo(id) {
    setIsSongList(false);
    setIsSetList(false);
    setIsMenu(false);
    setIsSongInfo(true);

    refSongIndexForAddInfo.current = id;
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

  function setListUpdater(newSetList) {
    const newOrder = [];
    newSetList.map((item) => {
      newOrder.push(item.id - 1);
    });
    refSetList.current = newOrder;
  }

  // RENDER

  if (isSongList) {
    return (
      <SongsList
        setList={refSetList.current}
        indexGetter={getSongIndex}
        buttonToSetListHendler={toSetList}
        buttonMenuHendler={toMenu}
      />
    );
  }
  if (isSetList) {
    return (
      <SetList
        updateSetList={setListUpdater}
        setList={refSetList.current}
        indexGetter={getIndexToDelete}
        buttonToSongListHendler={toSongsList}
        buttonToSongInfoHandler={toSongInfo}
      />
    );
  }
  if (isMenu) {
    return (
      <Menu
        setList={refSetList.current}
        indexGetter={getIndexToDelete}
        buttonToSongListHendler={toSongsList}
      />
    );
  }
  if (isSongInfo) {
    return <SongInfo refID={refSongIndexForAddInfo.current} buttonToSetListHendler={toSetList} />;
  }
}

export default App;
