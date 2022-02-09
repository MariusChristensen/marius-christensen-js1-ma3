const GAMES_URL =
  "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=9665856fe1f7473da019ba52cd10b03b";

function getGames() {
  fetch(GAMES_URL)
    .then(function (response) {
      return response.json();
    })
    .then(function (results) {
      console.log(results);
    })
    .catch(function (error) {
      console.log(error);
    });
}

getGames();
