import React, {useState} from 'react';
import {Section} from "./Section";

export function StateDemo() {
    const [isOn, setIsOn] = useState(false);
    const [counter, setCounter] = useState(0);

    return <Section title="state">
        <h3>huidige waarde van state is: {isOn ? "ON" : "OFF"}</h3>
        <button onClick={() => setIsOn(true)}>verander de state in true</button>
        <button onClick={() => setIsOn(false)}>verander de state in false</button>
        <button onClick={() => setIsOn(!isOn)}>toggle state</button>
        <div>huidige waarde van state is: {isOn ? "ON" : "OFF"}</div>
        <hr/>
        <div>counter is {counter}</div>
        <button onClick={() => setCounter(counter+1)}>+</button>
        <button onClick={() => setCounter(counter-1)}>-</button>
        <hr/>
        <div>counter is {counter}</div>
        <button onClick={() => setCounter(counter+1)}>+</button>
        <button onClick={() => setCounter(counter-1)}>-</button>
        <hr/>
    </Section>;
}

