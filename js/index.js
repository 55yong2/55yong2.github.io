const playerList = [
  { name: "김경현", level: 4 },
  { name: "김유성", level: 2 },
  { name: "심규태", level: 2 },
  { name: "오용준", level: 2.5 },
  { name: "정은수", level: 4 },
  { name: "강정헌", level: 2.5 },
  { name: "김민성", level: 2 },
  { name: "김병국", level: 2.5 },
  { name: "김상엽", level: 1.5 },
  { name: "김상형", level: 3 },
  { name: "김성민", level: 3 },
  { name: "김연성", level: 2 },
  { name: "김진욱", level: 3 },
  { name: "김태경", level: 1 },
  { name: "김한중", level: 1.5 },
  { name: "문찬혁", level: 1 },
  { name: "박시훈", level: 3 },
  { name: "박재찬", level: 1.5 },
  { name: "방기림", level: 1.5 },
  { name: "방민수", level: 1 },
  { name: "선우빈", level: 4 },
  { name: "손영웅", level: 2.5 },
  { name: "손준서", level: 4 },
  { name: "손진호", level: 4 },
  { name: "양은혁", level: 2.5 },
  { name: "오한주", level: 1.5 },
  { name: "유승효", level: 3 },
  { name: "윤성빈", level: 3 },
  { name: "윤형찬", level: 3 },
  { name: "이대희", level: 2 },
  { name: "이동영", level: 2 },
  { name: "이성재", level: 1 },
  { name: "이승찬", level: 2 },
  { name: "이준형", level: 2 },
  { name: "이찬일", level: 4 },
  { name: "장찬우", level: 2 },
  { name: "조성재", level: 4 },
  { name: "최성민", level: 3.5 },
  { name: "황도윤", level: 1 },
  { name: "황재훈", level: 1.5 },
];

var maxPeople = 0;

document.addEventListener("DOMContentLoaded", function () {
  let radios = document.querySelectorAll('input[name="maxPeople"]');
  radios.forEach(function (radio) {
    radio.addEventListener("change", function (event) {
      if (event.target.value === "fiveTeam") maxPeople = 5;
      else if (event.target.value === "sixTeam") maxPeople = 6;
    });
  });
});

function submitForm() {
  let form = document.getElementById("playerForm");
  let selectedPlayers = [];
  let checkboxes = form.querySelectorAll("input[type=checkbox]:checked");
  let playPlayer = [];
  let team = [];
  let index = 0;

  if (maxPeople === 0) {
    alert("팀 최대 인원수를 선택해주세요!");
    return;
  }

  for (let i = 0; i < checkboxes.length; i++) {
    selectedPlayers.push(checkboxes[i].value);
  }

  for (let i = 0; i < selectedPlayers.length; i++) {
    for (let j = 0; j < playerList.length; j++) {
      if (playerList[j].name == selectedPlayers[i]) {
        playPlayer.push(playerList[j]);
      }
    }
  }

  while (true) {
    let randPlayer = Math.floor(Math.random() * playPlayer.length);

    if (playPlayer.length === 0) break;

    if (team.length === maxPeople) {
      console.log(team);
      team = [];
      team.length = 0;
      continue;
    }

    if (!(team[index] in playPlayer[randPlayer])) {
      team.push(playPlayer[randPlayer]);
      playPlayer.splice(randPlayer, 1);
      index++;
    }
  }
}
