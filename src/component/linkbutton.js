import React from 'react';

function LinkButton(props){
    return (
        <button 
            className="btn btn-danger" 
            key={props.button.id}
            onClick = {()=>props.handleClick(props.button.subItems, (props.button.url!=undefined && props.button.url.length > 0) ? props.button.url : "")}
        >
                {props.button.name}
        </button>
    )
}

export default LinkButton
