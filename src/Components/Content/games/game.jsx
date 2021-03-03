import React from 'react';
import Example from './someExample/example';
import HurryUp from './hurryUp/hurryUp';
import ErrorBoundary from '../../../common/errorBoundary/errorBoundary'

const Game = (props) => {
    return <>
        <h1>Tic-Tac-Toe</h1>
        <Example />
        <div>------------------------------------------------------------------------------------------</div>
        <h1>Hurry up</h1>
        <ErrorBoundary name="game">
            <HurryUp />
        </ErrorBoundary>
        <div>------------------------------------------------------------------------------------------</div>
    </>
}

export default Game;