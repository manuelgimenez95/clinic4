import React from 'react';
import './textarea.css';

function textAreaInput(title){
    return (
        <div>
            <label for={title}>{title}</label>
            <textarea type="text" id="nombre" name={title} placeholder="Observaciones" rows="5">
            </textarea>
        </div>
    )
}

export default textAreaInput