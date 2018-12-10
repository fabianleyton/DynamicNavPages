import React, {Component} from 'react';
import ListButtons from '../../component/listbuttons';
import ContainerWeb from '../../component/containerweb';

class Home extends Component{
    state = {
        items: this.props.data.subItems,
        url: ""
    }
    handleClick = (itemsButtons, url) => {
        if(itemsButtons!=undefined){
            this.setState({
                items : itemsButtons
            })
        }else if(url.length > 0){
            this.setState({
                url: url
            })
        }
    }

    render(){
        return(
            <div>
                <h2>Menu</h2>
                {
                    
                    <div>
                        <ListButtons key={this.props.id} listbuttons={this.state.items} handleClick={this.handleClick}></ListButtons>
                        {
                            this.state.url.length >0 &&
                            <ContainerWeb src={this.state.url}></ContainerWeb>
                        }
                    </div>
                }
            </div>
        )
    }
}

export default Home
