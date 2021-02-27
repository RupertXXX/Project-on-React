import React from 'react';
import Example from './someExample/example';
import HurryUp from './hurryUp/hurryUp';

const Game = (props) => {
    return <>
        <h1>Tic-Tac-Toe</h1>
        <Example />
        <div>------------------------------------------------------------------------------------------</div>
        <h1>Hurry up</h1>
        <HurryUp />
        <div>------------------------------------------------------------------------------------------</div>
    </>
}

export default Game;