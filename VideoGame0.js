
fetch('./VideoGames.json')
  .then(response => response.json())
  .then(data => {
    // Loop through an array in the JSON data
    data.forEach(game => {
        console.log(game.title);
    });
  })
.catch(error => {
    // Handle any errors that occur while fetching the file
    console.log("An error occurred while fetching the JSON file.");
  });

  