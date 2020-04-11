import React from "react";

const Player = ({id,name,country, searches}) => {
return( 
    <div>
<h3>{name}</h3>
<h6>country: {country}</h6>
<h6 >searches: {searches}</h6>
</div>
)
}

export default Player