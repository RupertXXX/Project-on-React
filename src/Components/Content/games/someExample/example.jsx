import React, {useMemo, useState} from 'react';

const Example = (props) => {
    const calculation = (num) => {
        let bigNumberToTest = 10;
        let i = 0;
        while(i < bigNumberToTest) {i++}
        return num + 2;
    }

    const [counter, setCounter] = useState(1);
    const [secondCounter, secondSetCounter] = useState(1);

    const lul = useMemo(() => {
        return calculation(secondCounter);
    }, [secondCounter])

    return <>
        <div>{counter}</div>
        <div>{secondCounter}</div>
        <button onClick={() => setCounter((prev) => prev + 1)}>first</button>
        <button onClick={() => secondSetCounter((prev) => prev + 1)}>second</button>
        <div>{lul}</div>
    </>
}

export default Example;