import React from 'react';

function LinkButton(props){
    return (
        <button className="btn btn-danger" key={props.button.id}>{props.button.name}</button>
    )
}

export default LinkButton
