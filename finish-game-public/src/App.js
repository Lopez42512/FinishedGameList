import React, { useState, useEffect } from "react";

function App() {
  const [game, setGame] = useState([]);
  // get all the games from the server to populate the game cards
  useEffect(() => {
    try {
      fetch("http://localhost:3001/")
        .then((res) => res.json())
        .then((response) => setGame(response));
    } catch (error) {
      console.log(error);
    }
  }, []);
  // handle the button click that deletes the desire game
  const handleDelete = (id) => {
    const {name} = id.target;
    try {
      fetch(`http://localhost:3001/${name}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'text/plain'
        },
        body: name
      })
      .then(res => res.json())
      .then(response => {
        // redirect back to home page after the game has been deleted
        window.location.href = "http://localhost:3000/"
      })
    }
    catch(err) {
      console.log(err);
    }

  }
  // map through all the games that where pulled from the server and create a card for each
  const renderGame = game.map((game) => {
    return (
      <div key={game._id}>
        {game.image ? <img src={game.image} alt='no' style={{width:'100px', height:'100px'}}/>: <div></div>}
        <h1>{game.name}</h1>
        <h3>{game.system}</h3>
        <h3>{game.rating}</h3>
        <button onClick={handleDelete} name={game._id} value={game._id}>Delete {game.name}</button>
      </div>
    );
  });
  return (
    <div className="App">
      <form action="http://localhost:3001/" method="post">
        <label htmlFor="fname">First name:</label>
        <input type="text" id="fname" name="name" />
        <label htmlFor="lname">Last name:</label>
        <input type="text" id="lname" name="system" />
        <label htmlFor="lname">Last name:</label>
        <input type="text" id="lname" name="rating" />
        <input type="submit" value="Submit" />
      </form>
      {renderGame}
    </div>
    )
}

export default App;
