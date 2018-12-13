import React from 'react';
import LinkButton from './linkbutton';

function ListButtons(props){
    return(
        <div className="col-sm-10 col-md-10 offset-sm-1 offset-sm-1 row">
        {
            props.listbuttons.map((item)=>{
                return <div key={item.id} className="col-md-3"><LinkButton key={item.id} button={item} handleClick={props.handleClick}></LinkButton></div>
            })
        }
        </div>
    )
}

export default ListButtons