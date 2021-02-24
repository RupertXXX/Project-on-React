import React, { useState } from 'react';
import c from './counter.module.css';

const Counter = (props) => {

    let pageCount = Math.ceil(props.totalFriendsCount / props.pageSize);
    let counter = [];
    for(let i = 0; i < pageCount; i++)
    {
        counter[i] = i + 1;
    }

    let portionCount = Math.ceil(pageCount / props.portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionNumber = (portionNumber - 1) * props.portionSize + 1;
    let rightPortionNumber = portionNumber * props.portionSize;

    return <>
        <div>
            {portionNumber > 1 &&
                <button onClick={() => {setPortionNumber(portion => portion - 1)}}>prev</button> 
            }
        </div>
        {counter
            .filter(p => p >= leftPortionNumber && p <= rightPortionNumber)
            .map(obj => 
                <div key={obj} className={props.currentPage === obj ? c.selected : undefined} onClick={() => {props.newRequestOnClick(obj)} } >
                    {obj}
                </div>
            )
        }
        <div>
            {portionNumber < portionCount &&
                <button onClick={() => {setPortionNumber(portion => portion + 1)}}>next</button> 
            }
        </div>
    </>
}

export default Counter;