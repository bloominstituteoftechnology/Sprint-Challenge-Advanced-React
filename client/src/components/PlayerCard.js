import React from 'react';

import PersonIcon from '@material-ui/icons/Person';
import FlagIcon from '@material-ui/icons/Flag';
import SearchIcon from '@material-ui/icons/Search';


const PlayerCard = ({ player }) => {
  return(
    <div>
      <p><PersonIcon color="primary" fontSize="small" />{player.name}</p>
      <p><FlagIcon color="primary" fontSize="small" />{player.country}</p>
      <p><SearchIcon color="primary" fontsize="small" />{player.searches}</p>
    </div>
  )
}

export default PlayerCard;