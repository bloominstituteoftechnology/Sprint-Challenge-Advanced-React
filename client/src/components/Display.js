import React, { useEffect, useState } from 'react';

    const Display = (props) =>{
    
        return(
            <div className='card'>
                <div>{props.name}</div>
                <div>{props.country}</div>
                <div>{props.searches}</div>
            </div>
        )

    }

    export default Display