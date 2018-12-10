import React from 'react';

function ContainerWeb(props){
    return(
        <div>
            <iframe width={650} height={500} src={props.url} frameBorder={0}></iframe>
        </div>
    )
}

export default ContainerWeb