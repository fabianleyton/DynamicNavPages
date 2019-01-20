import React from 'react';

function LinkButton(props) {
    return (
        <div>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{props.button.name}</h5>
                    <p className="card-text">{props.button.description}</p>
                    <button
                        className="btn btn-danger"
                        key={props.button.id}
                        onClick={() => props.handleClick(props.button.subItems, (props.button.url != undefined && props.button.url.length > 0) ? props.button.url : "")}
                    >
                        Acceder
                </button>
                </div>
            </div>
        </div>
    )
}

export default LinkButton
