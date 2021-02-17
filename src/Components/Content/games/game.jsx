import React from 'react';
import Example from './someExample/example';
import HurryUp from './hurryUp/hurryUp';

const Game = (props) => {
    return <>
        <h1>Example</h1>
        <Example />

        <h1>Hurry up</h1>
        <HurryUp />
    </>
}

export default Game;