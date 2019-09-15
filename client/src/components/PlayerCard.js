import React from 'react';

export default function PlayerCard(props) {
  return (
    <div className='player-card'>
      <a
        href={`http://www.google.com/search?q=${props.data.name
          .split(' ')
          .join('+')}`}
        target='_blank'>
        <h3>⚽ {props.data.name} ⚽</h3>
        <p>{props.data.country}</p>
        <p>Google Searches: {props.data.searches}</p>
      </a>
    </div>
  );
}