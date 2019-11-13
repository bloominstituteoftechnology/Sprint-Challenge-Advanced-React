import { useState } from 'react';
import axios from 'axios';

const useCustomState = async (intialValue, url) => {
    const [customState, setCustomState] = useState(intialValue); 

    const handleChanges = change => {
        setCustomState(change);
    }
    
    let res = await axios.get(url);
    // console.log(res.data);
    setCustomState('res')
    
    console.log([customState, setCustomState, handleChanges]);

    return [customState, setCustomState, handleChanges];
}

export default useCustomState;