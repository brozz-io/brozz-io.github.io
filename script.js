const gameList = document.querySelector("#gameList");

// Dummy game list
const games = ["Bitrapper Mobile", "Onlife: Life Simulator game"];

games.forEach((game) => {
    const li = document.createElement("li");
    li.textContent = game;
    gameList.append(li);
});
