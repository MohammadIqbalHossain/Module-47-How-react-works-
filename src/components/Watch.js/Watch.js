import React, { useEffect, useState } from 'react';
import Dial from '../Dial/Dial';
import Tablet from '../Tablet/Tablet';

const Watch = () => {
    const [state, setState] = useState(0);
    const get = () => {
        const setCount = state + 1;
        setState(setCount)
    }

    useEffect(() => {
        console.log(state);
    }, [state])
    return (
        <div>
            <p>This is a state function</p>
            <h1>{state}</h1>
            <button onClick={get}>Run</button>
            <Dial state={state}></Dial>
            <Tablet></Tablet>
        </div>
    );
};

export default Watch;