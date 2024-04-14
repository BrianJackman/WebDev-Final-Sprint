fetch('./VideoGames.json')
  .then(response => response.json())
  .then(data => {
    // Loop through an array in the JSON data
    data.forEach(game => {
        console.log(game.title);
    });

    function getTitles(data) {
      return data.map(game => game.title).join(', ');
    }

    function getDevelopers(data) {
      return data.map(game => game.developer).join(', ');
    }

    function getGenres(data) {
      return data.map(game => game.genre).join(', ');
    }

    document.body.innerHTML = `
    <h1>Video Games</h1>
    <p>Titles: ${getTitles(data)}</p>
    <p>Developers: ${getDevelopers(data)}</p>
    <p>Genres: ${getGenres(data)}</p>
    `;
  })
  .catch(error => console.error('Error:', error));