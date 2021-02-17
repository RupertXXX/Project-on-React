import React, { useEffect, useState } from 'react';
import c from './hurryUp.module.css';

const StartTimer = (props) => {
    let [value, setValue] = useState(0);

    const myIsActive = props.isActive;

    useEffect(() => {
        if(myIsActive) {
            setTimeout(() => {
                setValue((prevValue) => {
                    return prevValue + 1;
                });
            }, 1000)
        }
    }, [myIsActive, value])

    return <div>
        <span>Timer </span>
        <span className={c.divs}>{value}</span>
    </div>
}

const HurryUp = () => {
    const score = 50;
    let [myValue, setMyValue] = useState(0);
    let [isActive, setIsActive] = useState(true);

    const increment = () => {
        if (myValue < score - 1) setMyValue(myValue + 1);
        else if (myValue === score - 1) {
            setMyValue(myValue + 1);
            setIsActive(false);
        }
    }

    return <div>

        <h3>Hurry up to collect {score} score</h3>
        {
            myValue > 0 
            ? <StartTimer isActive={isActive} />
            : <div> <span>Timer </span><span className={c.divs}>0</span> </div>
        }
        <span>Score </span>
        <span className={c.divs} >{myValue}</span>
        <div><button className={c.spans} onClick={increment}>+</button></div>
    </div>
}

export default HurryUp;