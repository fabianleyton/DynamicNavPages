import React from 'react';

function ContainerWeb(props){
    return(
        <div>
            <iframe width={650} height={500} src={props.url}></iframe>
        </div>
    )
}

export default ContainerWeb