

import React, { useState } from 'react';

let placeholder = document.createElement("li");
placeholder.className = "placeholder";

export const DragComponent = ({ data, sortData, swap }) => {
    const [idx, setIdx] = useState(null);
    const drag = (event) => {
        console.log('dragging');
    }
    const dragStart = (event) => {
        // console.log('drag start...');
        event.dataTransfer.setData("Text", event.target.id);
        console.log(`event.target.id is used by setIdx: ${event.target.id}`);

        setIdx(event.target.id);
    }

    const dragEnd = (event) => {
        event.dataTransfer.setData("Text", null);
        setIdx(null);

    }

    const dragEnter = event => {
    }

    const dragLeave = event => {
        event.target.style.border = "none";
        event.target.style.height = "40px";
        event.target.style.padding = "10px";
        event.target.style.marginButtom = "20px";
        event.target.style.marginTop = "0px";
    }

    const dragOver = (event) => {
        event.preventDefault();

        //onDragOver
        event.target.style.height = "20px";
        event.target.style.transitionDuration = "400ms";

        if (event.target.id !== idx) {
            console.log(`dragging over, current event.target.id is: ${event.target.id}, current idx is: ${idx}`);
            if (event.target.id < idx) {
                event.target.style.borderTop = "10px solid darkgrey";
                event.target.style.marginTop = "20px";
            } else {
                event.target.style.borderBottom = "10px solid darkgrey";
                event.target.style.marginBottom = "20px";
            }
        } else {
            event.target.style.marginTop = "0px";
            event.target.style.marginButtom = "20px";
        }
    }

    const drop = (event) => {
        event.preventDefault();
        const origin = event.dataTransfer.getData("Text");
        const replacement = event.target.id;
        swap(origin, replacement);
        event.target.style.border = "none";
        event.target.style.height = "40px";
        event.target.style.padding = "10px";
        event.target.style.marginButtom = "20px";
        event.target.style.marginTop = "0px";
        setIdx(null);
    }

    return (
        <ul className="item-container" onDragOver={event => dragOver(event)}>
            {
                data.map((d, idx) =>
                    <li id={`${idx}`}
                        className="items"
                        key={`item${idx}`}
                        draggable={true}
                        onDragStart={e => dragStart(e)}
                        onDragEnd={e => dragEnd(e)}
                        onDrop={event => drop(event)}>
                        {d.description}
                    </li>
                )
            }
        </ul >
    )
}