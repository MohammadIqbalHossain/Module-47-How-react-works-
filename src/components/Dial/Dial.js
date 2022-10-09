import React from 'react';
import Knob from '../knob/knob';

const Dial = (props) => {
    return (
        <div>
            <p>This is a new state: {props.state}</p>
            <Knob state={props.state}></Knob>
        </div>
    );
};

export default Dial;