import React, { Component } from 'react';
import Directory from './Directory';

class Folder extends Component {
    constructor(){
        super();
        this.state = { visibleChild: false }
    }
    toggle(){
        this.setState({ visibleChild: !this.state.visibleChild })
    }
    render(){
        if(this.state.visibleChild){
            return (
                    <div className="treeview">
                       <div className="open" onClick={this.toggle.bind(this)}></div>
                       <p>{this.props.value}</p>
                       <Directory data = {this.props.data}/>
                    </div>
                  );
        } else {
            return ( 
                    <div className="treeview">
                       <div className="close" onClick={this.toggle.bind(this)}></div>
                       <p>{this.props.value}</p>
                    </div>
                  );
        }
    }
}
export default Folder;