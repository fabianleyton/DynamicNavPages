import React, {Component} from 'react';
import ListButtons from '../../component/listbuttons';

class Home extends Component{
    render(){
        return(
            <div>
                <h2>prueba</h2>
                {console.log(this.props)}
                <div>
                    {
                        <ListButtons listbuttons={this.props.data.subItems}></ListButtons>
                    }
                </div>
            </div>
        )
    }
}

export default Home
