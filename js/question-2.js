// Answer:
const GAMES_URL =
  "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=991cdc9aeef144c09cca67cd854041b0";

const gamesContainer = document.querySelector(".games-container");

function createHTML(results) {
  const gamesList = results;

  gamesContainer.innerHTML = "";

  for (let i = 0; i < gamesList.length; i++) {
    if (i === 8) {
      break;
    }
    gamesContainer.innerHTML += `<div class="games-container"><ul>
    <li>Name: ${gamesList[i].name}</li>
    <li>Rating: ${gamesList[i].rating}</li>
    <li>Tags: ${gamesList[i].tags.length}</li><ul></div>`;
  }
}

async function getGames() {
  try {
    const response = await fetch(GAMES_URL);
    const data = await response.json();
    const games = data.results;
    createHTML(games);
  } catch (error) {
    gamesContainer.innerHTML = displayError("This error has occurred: " + error);
  }
}

getGames();
