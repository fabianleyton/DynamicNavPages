import React, {Component} from 'react';
import ListButtons from '../../component/listbuttons';
import ContainerWeb from '../../component/containerweb';

class Home extends Component{
    state = {
        items: this.props.data.subItems,
        url: "",
        itemsBack: this.props.subItems,
        itemsHome: this.props.data.subItems
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
        console.log(url);
    }

    render(){
        return(
            <div>
                <h2>{this.props.data.companyName}</h2>
                {
                    
                    <div>
                        {
                            <div>
                            this.state.items != undefined &&
                            <ListButtons key={this.props.id} listbuttons={this.state.items} handleClick={this.handleClick}></ListButtons>
                            </div>
                        }
                        {console.log(this.state.items)}
                        {
                            <div>
                            this.state.url.length >0 &&
                            <ContainerWeb src={this.state.url}></ContainerWeb>
                            </div>
                        }
                    </div>
                }
            </div>
        )
    }
}

export default Home
