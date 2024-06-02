import React, { useCallback, useEffect } from "react";

const List = React.memo(
  ({
    showPlayerLeft,
    showPlayerRight,
    playerList,
    setPlayerList,
    playPlayer,
    setPlayPlayer,
    isTeamMake,
    setIsTeamMake,
  }) => {
    const handleCheckedChange = useCallback(
      (id) => {
        let newPlayerList = playerList.map((data) => {
          if (data.id === id) {
            data.checked = !data.checked;
          }
          return data;
        });

        setPlayerList(newPlayerList);
      },
      [playerList, setPlayerList]
    );

    useEffect(() => {
      console.log(playPlayer);
    }, [playPlayer]);

    const handleSubmit = (e) => {
      e.preventDefault();

      playerList.map((data) => {
        if (data.checked) {
          setPlayPlayer((prev) => [...prev, data]);
        }
        return data;
      });
      setIsTeamMake(true);
    };

    return (
      <div>
        <form className="flex" onSubmit={handleSubmit}>
          <div className="flex-1">
            {showPlayerLeft.map(({ id, name, checked }) => (
              <div key={id} className="text-center mr-3">
                <input
                  type="checkbox"
                  className="size-4 rounded border-gray-300"
                  onChange={() => handleCheckedChange(id)}
                  defaultChecked={checked}
                />
                <span className="ml-2 font-medium text-gray-900">{name}</span>
              </div>
            ))}
          </div>
          <div className="flex-1">
            {showPlayerRight.map(({ id, name, checked }) => (
              <div key={id} className="text-center mr-3">
                <input
                  type="checkbox"
                  className="size-4 rounded border-gray-300"
                  onChange={() => handleCheckedChange(id)}
                  defaultChecked={checked}
                />
                <span className=" ml-2 font-medium text-gray-900">{name}</span>
              </div>
            ))}
          </div>
        </form>
        <div className="flex">
          <button
            className="px-4 py-2 m-2 flex-1 items-center border rounded"
            type="subtmit"
            onClick={handleSubmit}
          >
            팀 구성하기
          </button>
        </div>
      </div>
    );
  }
);

export default List;
