import React, { useState } from 'react';

const placeholder = document.createElement("li");
placeholder.className = "placeholder";


export const List = ({ colors }) => {
    const [internalColors, setInternalColors] = useState(colors);
    let dragged;
    let over;
    let data;
    let from;
    let to;

    const dragStart = (e) => {
        dragged = e.currentTarget;
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/html', dragged);
    }
    const dragEnd = (e) => {
        dragged.style.display = 'block';

        if ([...dragged.parentNode.childNodes].includes(placeholder)) { dragged.parentNode.removeChild(placeholder); } else {
            console.log(`placeholder is not childNodes of dragged.parentNode`);

        }

        // update state
        data = internalColors;
        from = Number(dragged.dataset.id);
        to = Number(over.dataset.id);
        if (from < to) to--;
        data.splice(to, 0, data.splice(from, 1)[0]);
        debugger
        setInternalColors([...data]);
    }
    const dragOver = (e) => {
        e.preventDefault();
        dragged.style.display = "none";
        if (e.target.className === 'placeholder') return;
        over = e.target;

        // e.target.parentNode.insertBefore(placeholder, e.target.nextSibling);
        e.target.parentNode.insertBefore(placeholder, e.target);
        // debugger

        // if (([...e.target.parentNode.children].length - [...e.target.parentNode.children].indexOf(e.target)) === 2) {
        //     e.target.parentNode.insertBefore(placeholder, e.target.nextSibling);
        //     console.log(`222`);

        // } else {
        //     e.target.parentNode.insertBefore(placeholder, e.target);
        //     // e.target.parentNode.insertBefore(placeholder, e.target.nextSibling);
        // }
    }

    return (
        <ul onDragOver={e => dragOver(e)}>
            {internalColors.map((item, i) =>
                <li
                    data-id={i}
                    key={i}
                    draggable='true'
                    onDragEnd={e => dragEnd(e)}
                    onDragStart={e => dragStart(e)}>{item}</li>
            )}
        </ul>
    )

}
