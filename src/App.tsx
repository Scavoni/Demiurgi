import React from 'react';
import { Navbar } from './Components/NavBar';
import { ProfileCard } from './Components/ProfileCard';
import { GlobalStyle } from "./styles/global"

let Players = [
  {
    name: 'Trey',
    rpgClass: 'Ladino',
    race: 'Humano',
    orientation: 'Neutro',
    currentHealth: 19,
    currentLuck: 7,
    armor: 13,
    profilePicture: '/Assets/trey.png'
  },
  {
    name: 'Oryx',
    rpgClass: 'Mago',
    race: 'Elfo',
    orientation: 'Caos',
    currentHealth: 0,
    currentLuck: 0,
    armor: 13,
    profilePicture:'/Assets/oryx.png'

  }
]


function App() {
  return (

    <div className="App">
      <Navbar />
      <header className="App-header">
        {Players.map(player=>(
          <ProfileCard
            name = {player.name}
            rpgClass = {player.rpgClass}
            race = {player.race}
            orientation = {player.orientation}
            currentHealth = {player.currentHealth}
            currentLuck = {player.currentHealth}
            armor = {player.armor}
            profilePicture = {player.profilePicture}
          />
        ))}

      </header>
      <GlobalStyle />
    </div>
  );
}

export default App;
