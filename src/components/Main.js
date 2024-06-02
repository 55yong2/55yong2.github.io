import React from "react";
import List from "./List";
import TeamButton from "./TeamButton";

const Main = ({
  showPlayerLeft,
  showPlayerRight,
  playerList,
  setPlayerList,
  maxPlayer,
  setMaxPlayer,
  playPlayer,
  setPlayPlayer,
  isTeamMake,
  setIsTeamMake,
}) => {
  return (
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 max-w-screen-4xl">
      <div className="mx-auto max-w-lg text-center">
        <h1 className="text-2xl font-bold sm:text-3xl">
          Emotion FAS 팀 자동 매칭 시스템
        </h1>
        <p className="mt-4 text-gray-500 pb-1">
          팀 최대 인원수와 풋살 참여자를 선택해주세요
        </p>
      </div>
      <TeamButton maxPlayer={maxPlayer} setMaxPlayer={setMaxPlayer} />
      <List
        showPlayerLeft={showPlayerLeft}
        showPlayerRight={showPlayerRight}
        playerList={playerList}
        setPlayerList={setPlayerList}
        playPlayer={playPlayer}
        setPlayPlayer={setPlayPlayer}
        isTeamMake={isTeamMake}
        setIsTeamMake={setIsTeamMake}
      />
    </div>
  );
};

export default Main;
