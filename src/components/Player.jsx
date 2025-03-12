import { useState } from "react";

export default function Player({ initialName, symbol, isActive, onChangeName }) {

  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    //this is the best practice of using state
    setIsEditing((editing) => !editing); //instantly applied
    //setIsEditing((editing) => !editing);

    //Don't use it like below:
    //setIsEditing(!isEditing)); // ==> schedules a state update to true
    //setIsEditing(!isEditing)); // ==> schedules a state update to true not false !!

    if (isEditing) {

      onChangeName(symbol, playerName);
    }
  }

  function handleChange(event) {
    //console.log(event);
    setPlayerName(event.target.value);
  }

  let btnCaption = 'Edit';
  let editablePlayerName = <span className="player-name">{playerName}</span>

  if (isEditing) {
    editablePlayerName = <input type="text" required value={playerName} className="player" onChange={handleChange} />
    btnCaption = "Save";
  }

  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{btnCaption}</button>
    </li>
  )
}