import React, { useState } from "react";
import Main from "./components/Main";

const App = () => {
  const [playerList, setPlayerList] = useState([
    { id: 1, name: "김경현", checked: false, level: 2 },
    { id: 2, name: "김유성", checked: false, level: 2 },
    { id: 3, name: "박시훈", checked: false, level: 2 },
    { id: 4, name: "심규태", checked: false, level: 2 },
    { id: 5, name: "오용준", checked: false, level: 2 },
    { id: 6, name: "정은수", checked: false, level: 2 },
    { id: 7, name: "강정헌", checked: false, level: 2 },
    { id: 8, name: "김민성", checked: false, level: 2 },
    { id: 9, name: "김민성", checked: false, level: 2 },
    { id: 10, name: "김병국", checked: false, level: 2 },
    { id: 11, name: "김상엽", checked: false, level: 2 },
    { id: 12, name: "김상형", checked: false, level: 2 },
    { id: 13, name: "김성민", checked: false, level: 2 },
    { id: 14, name: "김연성", checked: false, level: 2 },
    { id: 15, name: "김진욱", checked: false, level: 2 },
    { id: 16, name: "김태경", checked: false, level: 2 },
    { id: 17, name: "김태랑", checked: false, level: 2 },
    { id: 18, name: "김한중", checked: false, level: 2 },
    { id: 19, name: "문찬혁", checked: false, level: 2 },
    { id: 20, name: "박재찬", checked: false, level: 2 },
    { id: 21, name: "방기림", checked: false, level: 2 },
    { id: 22, name: "방민수", checked: false, level: 2 },
    { id: 23, name: "석재원", checked: false, level: 2 },
    { id: 24, name: "선우빈", checked: false, level: 2 },
    { id: 25, name: "손다빈", checked: false, level: 2 },
    { id: 26, name: "손영웅", checked: false, level: 2 },
    { id: 27, name: "손준서", checked: false, level: 2 },
    { id: 28, name: "손진호", checked: false, level: 2 },
    { id: 29, name: "양은혁", checked: false, level: 2 },
    { id: 30, name: "오한주", checked: false, level: 2 },
    { id: 31, name: "유승효", checked: false, level: 2 },
    { id: 32, name: "윤성빈", checked: false, level: 2 },
    { id: 33, name: "윤형찬", checked: false, level: 2 },
    { id: 34, name: "이대희", checked: false, level: 2 },
    { id: 35, name: "이동근", checked: false, level: 2 },
    { id: 36, name: "이동영", checked: false, level: 2 },
    { id: 37, name: "이성재", checked: false, level: 2 },
    { id: 38, name: "이승찬", checked: false, level: 2 },
    { id: 39, name: "이준형", checked: false, level: 2 },
    { id: 40, name: "이찬일", checked: false, level: 2 },
    { id: 41, name: "장찬우", checked: false, level: 2 },
    { id: 42, name: "조성재", checked: false, level: 2 },
    { id: 43, name: "최성민", checked: false, level: 2 },
    { id: 44, name: "황도윤", checked: false, level: 2 },
    { id: 45, name: "황재훈", checked: false, level: 2 },
  ]);

  const showPlayerLeft = playerList.slice(0, playerList.length / 2 + 1);
  const showPlayerRight = playerList.slice(
    playerList.length / 2 + 1,
    playerList.length
  );

  const [maxPlayer, setMaxPlayer] = useState("");
  const [playPlayer, setPlayPlayer] = useState([]);
  const [isTeamMake, setIsTeamMake] = useState(false);

  if (isTeamMake) {
    return (
      <div>
        {playPlayer.map(({ id, name, level }) => (
          <div key={id}>
            <p>{name}</p>
            <p>{level}</p>
          </div>
        ))}
      </div>
    );
  } else {
    return (
      <Main
        showPlayerLeft={showPlayerLeft}
        showPlayerRight={showPlayerRight}
        playerList={playerList}
        setPlayerList={setPlayerList}
        maxPlayer={maxPlayer}
        setMaxPlayer={setMaxPlayer}
        playPlayer={playPlayer}
        setPlayPlayer={setPlayPlayer}
        isTeamMake={isTeamMake}
        setIsTeamMake={setIsTeamMake}
      />
    );
  }
};

export default App;
