import React, {useRef, useState} from 'react';
import c from './example.module.css';
import cross from '../../../../assets/images/cross.png';
import circle from '../../../../assets/images/circle.png';

const Example = (props) => {
    const initialTable = [0,0,0,0,0,0,0,0,0];
    const [tableItems, setTableItems] = useState(initialTable);
    const disabled = [0,0,0,0,0,0,0,0,0];
    let disabledItems = useRef(disabled);
    let isNine = useRef(0);
    let a = 0;

    const isEnd = () => {
        if(disabledItems.current[0] === disabledItems.current[1] && disabledItems.current[1] === disabledItems.current[2] && disabledItems.current[1] === 1) isNine.current = 11;
        if(disabledItems.current[3] === disabledItems.current[4] && disabledItems.current[4] === disabledItems.current[5] && disabledItems.current[4] === 1) isNine.current = 11;
        if(disabledItems.current[6] === disabledItems.current[7] && disabledItems.current[7] === disabledItems.current[8] && disabledItems.current[7] === 1) isNine.current = 11;
        if(disabledItems.current[0] === disabledItems.current[3] && disabledItems.current[3] === disabledItems.current[6] && disabledItems.current[3] === 1) isNine.current = 11;
        if(disabledItems.current[4] === disabledItems.current[1] && disabledItems.current[1] === disabledItems.current[7] && disabledItems.current[1] === 1) isNine.current = 11;
        if(disabledItems.current[5] === disabledItems.current[8] && disabledItems.current[8] === disabledItems.current[2] && disabledItems.current[8] === 1) isNine.current = 11;
        if(disabledItems.current[0] === disabledItems.current[4] && disabledItems.current[4] === disabledItems.current[8] && disabledItems.current[4] === 1) isNine.current = 11;
        if(disabledItems.current[6] === disabledItems.current[4] && disabledItems.current[4] === disabledItems.current[2] && disabledItems.current[4] === 1) isNine.current = 11;

        if(disabledItems.current[0] === disabledItems.current[1] && disabledItems.current[1] === disabledItems.current[2] && disabledItems.current[1] === 2) isNine.current = 10;
        if(disabledItems.current[3] === disabledItems.current[4] && disabledItems.current[4] === disabledItems.current[5] && disabledItems.current[4] === 2) isNine.current = 10;
        if(disabledItems.current[6] === disabledItems.current[7] && disabledItems.current[7] === disabledItems.current[8] && disabledItems.current[7] === 2) isNine.current = 10;
        if(disabledItems.current[0] === disabledItems.current[3] && disabledItems.current[3] === disabledItems.current[6] && disabledItems.current[3] === 2) isNine.current = 10;
        if(disabledItems.current[4] === disabledItems.current[1] && disabledItems.current[1] === disabledItems.current[7] && disabledItems.current[1] === 2) isNine.current = 10;
        if(disabledItems.current[5] === disabledItems.current[8] && disabledItems.current[8] === disabledItems.current[2] && disabledItems.current[8] === 2) isNine.current = 10;
        if(disabledItems.current[0] === disabledItems.current[4] && disabledItems.current[4] === disabledItems.current[8] && disabledItems.current[4] === 2) isNine.current = 10;
        if(disabledItems.current[6] === disabledItems.current[4] && disabledItems.current[4] === disabledItems.current[2] && disabledItems.current[4] === 2) isNine.current = 10;
        if(isNine.current === 11) alert("WIN!");
        if(isNine.current === 9) alert("DRAW");
        if(isNine.current === 10) alert("LOSE(");
        if(isNine.current > 8) {
            setTableItems(initialTable);
            disabledItems.current = disabled;
            isNine.current = 0;
            a = 1;
        }
    }
    const aiMove = () => {
        let circ = Math.floor(Math.random() * (9 - 0) + 0);
        while(true){
            if(disabledItems.current[circ] != 0) circ = Math.floor(Math.random() * (9 - 0) + 0);
            else break;
        }
        if(disabledItems.current[circ] === 0){
            isEnd();
            setTableItems((oldTable) => {
                return oldTable.map((el, index) => {
                    if(index === circ) el = 2;
                    return el;
                });
            });
            isNine.current++;
            disabledItems.current[circ] = 2;
            isEnd();
        }
    }
    const move = (num) => {
        if(disabledItems.current[num] === 0 && isNine.current < 9){
            isEnd();
            setTableItems((oldTable) => {
                return oldTable.map((el, index) => {
                    if(index === num) el = 1;
                    return el;
                });
            });
            disabledItems.current[num] = 1;
            isNine.current++;
            isEnd();
            if(isNine.current < 9 && a === 0) aiMove();
            a = 0;
        }
    }

    return <>
        <div className={c.table}>
            <div className={c.row1}>
                <div onClick={() => move(0)} className={c.item}>{tableItems[0] === 0 ? null : tableItems[0] === 1 ? <img src={cross} /> : <img src={circle} />}</div>
                <div onClick={() => move(1)} className={c.item}>{tableItems[1] === 0 ? null : tableItems[1] === 1 ? <img src={cross} /> : <img src={circle} />}</div>
                <div onClick={() => move(2)} className={c.item}>{tableItems[2] === 0 ? null : tableItems[2] === 1 ? <img src={cross} /> : <img src={circle} />}</div>
            </div>
            <div className={c.row2}>
                <div onClick={() => move(3)} className={c.item}>{tableItems[3] === 0 ? null : tableItems[3] === 1 ? <img src={cross} /> : <img src={circle} />}</div>
                <div onClick={() => move(4)} className={c.item}>{tableItems[4] === 0 ? null : tableItems[4] === 1 ? <img src={cross} /> : <img src={circle} />}</div>
                <div onClick={() => move(5)} className={c.item}>{tableItems[5] === 0 ? null : tableItems[5] === 1 ? <img src={cross} /> : <img src={circle} />}</div>
            </div>
            <div className={c.row3}>
                <div onClick={() => move(6)} className={c.item}>{tableItems[6] === 0 ? null : tableItems[6] === 1 ? <img src={cross} /> : <img src={circle} />}</div>
                <div onClick={() => move(7)} className={c.item}>{tableItems[7] === 0 ? null : tableItems[7] === 1 ? <img src={cross} /> : <img src={circle} />}</div>
                <div onClick={() => move(8)} className={c.item}>{tableItems[8] === 0 ? null : tableItems[8] === 1 ? <img src={cross} /> : <img src={circle} />}</div>
            </div>
        </div>
    </>
}

export default Example;