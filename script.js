 // Create the team object
const team = {
    //creates _players array that contains three player objects
    //The _ prefix is used to indicate that a property is supposed to be private or internal to the object
    _players: [
      {firstName: 'James', lastName: 'Powels', age: 22},
      {firstName: 'Timothy', lastName: 'Clark', age: 40},
      {firstName: 'John', lastName: 'Atkins', age: 33}
    ],
    _games: [
      {opponent: 'Ravens', teamPoints: '70', opponentPoints: '68'},
      {opponent: 'Hawks', teamPoints: '30', opponentPoints: '45'},
      {opponent: 'Sea Gulls', teamPoints: '12', opponentPoints: '8'}
    ],
    //getter method for retrieving players
    get players() {
      return this._players;
    },
    //getter method for retrieving games
    get games() {
      return this._games;
    },
    //function for adding a new player to the team object
    addPlayer(newFirstName, newLastName, newAge) {
        //lets the new player object be assigned to three properties
      let player = {
        firstName: newFirstName,
        lastName: newLastName,
        age: newAge,
      };
      //pushes the player object to the end of the _players array
      this._players.push(player);
    },
    //function for adding a new game to the team object
    addGame(newOpponent, newTeamPoints, newOpponentPoints) {
      let game = {
        opponent: newOpponent,
        teamPoints: newTeamPoints,
        opponentPoints: newOpponentPoints
      };
      this._games.push(game);
    }
  };
  
  //function to display all the players in the HTML (therfore the website)
  function displayPlayers() {
    const playersList = document.getElementById('players-list');
    playersList.innerHTML = '';
  
    //loops through each player and create an HTML list item for each one of them
    team.players.forEach(player => {
      const playerItem = document.createElement('li');
      //sets the text content of the HTML element labled playerItem
      playerItem.textContent = `${player.firstName} ${player.lastName}, Age: ${player.age}`;
      //adds the playersList to the playerItem (which is the html bullet points)
      playersList.appendChild(playerItem);
    });
  }
  
  //function to display the games in the HTML
  function displayGames() {
    const gamesList = document.getElementById('games-list');
    gamesList.innerHTML = '';
  
    //loops through each game and create an HTML list item for them
    team.games.forEach(game => {
      const gameItem = document.createElement('li');
      const pointDifference = game.teamPoints - game.opponentPoints;
      gameItem.textContent = `Opponent: ${game.opponent}, Team Points: ${game.teamPoints}, Opponent Points: ${game.opponentPoints}, Point Difference: ${pointDifference}`;
      gamesList.appendChild(gameItem);
    });
  }
  
  //event listener for adding a new player
  document.getElementById('add-player-btn').addEventListener('click', () => {
    //retrieve the input values for the new player
    const newFirstName = document.getElementById('new-firstname').value;
    const newLastName = document.getElementById('new-lastname').value;
    const newAge = document.getElementById('new-age').value;
  
    //add the new player to the team
    team.addPlayer(newFirstName, newLastName, newAge);
    //updates the displayed players
    displayPlayers();
  
    //clear the input fields after adding a player
    document.getElementById('new-firstname').value = '';
    document.getElementById('new-lastname').value = '';
    document.getElementById('new-age').value = '';
  });
  
  //event listener for adding a new game
  document.getElementById('add-game-btn').addEventListener('click', () => {
    //retrieve the input values for the new game
    const newOpponent = document.getElementById('new-opponent').value;
    const newTeamPoints = document.getElementById('new-team-points').value;
    const newOpponentPoints = document.getElementById('new-opponent-points').value;
  
    //adds the new game to the team
    team.addGame(newOpponent, newTeamPoints, newOpponentPoints);
    //updates the displayed games
    displayGames();
  
    //clears the input fields after adding a game
    document.getElementById('new-opponent').value = '';
    document.getElementById('new-team-points').value = '';
    document.getElementById('new-opponent-points').value = '';
  });
  
  //calls the functions which updates the display of players and games on the webpage
  displayPlayers();
  displayGames();
