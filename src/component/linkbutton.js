import React, {Component} from 'react';

class LinkButton extends Component{
    render(){
        return (
            <div>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{this.props.button.name}</h5>
                        <p className="card-text">{this.props.button.description}</p>
                        <button
                            className="btn btn-danger"
                            key={this.props.button.id}
                            onClick={() => this.props.handleClick(this.props.button.subItems, (this.props.button.url != undefined && this.props.button.url.length > 0) ? this.props.button.url : "")}
                        >
                            Acceder
                    </button>
                    </div>
                </div>
            </div>
        )
    }
}

//function LinkButton(props) {
    
//}

export default LinkButton
