import React, { useEffect } from 'react';
import Player from "./Player";
import {useLocalStorage} from "../hooks/useLocalStorage";

const Display = props => { 
  const [playerData, setPlayerData] = useLocalStorage('players', []);

  useEffect(() => {
    setPlayerData(props.data)
  }, [props.data])

  if (props.data === []) {
    return(
      <p>Loading</p>
    )
  }

  return (
    <div>
      {playerData.map(el => <Player player={el}/>)}
    </div>
  )
}
export default Display;