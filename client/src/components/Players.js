import React, { useEffect } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

function Players(props) {
    console.log(props)
    const [someValue, setSomeValue] = useLocalStorage('key', false);

    useEffect(() => {
        const body = document.querySelector('body')
        if (someValue === true) {
            body.classList.add('dark-mode')
        } else {
            body.classList.remove('dark-mode')
        }

    }, [someValue])

    return (
        <div>
            <h3>{props.player.name}</h3>
            <h4>{props.player.country}</h4> 
            <h5>{props.player.searches}</h5>
        </div>
    )
}

export default Players;