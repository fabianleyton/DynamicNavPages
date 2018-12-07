import React from 'react';

function LinkButton(props){
    return (
        <button key={props.button.id}>{props.button.name}</button>
    )
}

export default LinkButton
