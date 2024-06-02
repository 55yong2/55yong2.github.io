import React, { useCallback } from "react";

const TeamButton = React.memo(({ maxPlayer, setMaxPlayer }) => {
  const handleClick = useCallback(
    (e) => {
      if (e.target.id === "five") {
        setMaxPlayer("five");
      } else {
        setMaxPlayer("six");
      }
    },
    [setMaxPlayer]
  );

  return (
    <div className="flex">
      <button
        id="five"
        className={`flex-1 px-4 py-2 m-2 border rounded border-gray-200 text-gray-600 ${
          maxPlayer === "five" ? "bg-gray-200" : ""
        }`}
        onClick={handleClick}
      >
        5명
      </button>
      <button
        id="six"
        className={`flex-1 px-4 py-2 m-2 border rounded border-gray-200 text-gray-600 ${
          maxPlayer === "six" ? "bg-gray-200" : ""
        }`}
        onClick={handleClick}
      >
        6명
      </button>
    </div>
  );
});

export default TeamButton;
