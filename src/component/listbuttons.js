import React from 'react';
import LinkButton from './linkbutton';

function ListButtons(props){
    return(
        <div>
            {console.log(props)}
        {
            props.listbuttons.map((item)=>{
                return <LinkButton key={item.id} button={item}></LinkButton>
            })
        }
        </div>
    )
}

export default ListButtons