import React from "react";


const Pokecard = ({id, name, type, base_experience }) => {

  let src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  console.log(id)
  console.log(base_experience)

  return (
    // something here
    <div className = "Pokecard">
      <h2 className = "Pokecard-title">{name}</h2>

      <img src = {src} alt = {name}></img>

      <p>Type: {type}</p>
      <br></br>
      <p>EXP: {base_experience}</p>    
    </div>

  )
};

export default Pokecard;