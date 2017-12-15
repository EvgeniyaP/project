import React, { Component } from 'react';
import Document from './Document';


class Directory extends Component {
    constructor(props){
        super(props);
        this.state = { isChildVisible: false }
    }
    toggle(){
        this.setState({ isChildVisible: !this.state.isChildVisible })
    }
    render() {
            return (
                    <div className="treeview">
                       <div className={this.state.isChildVisible ? 'open' : 'close'} onClick={this.toggle.bind(this)}>
                            {this.props.data.map((node, i) =>{
                                if(node.type === 'root' || node.type === 'dir') {
                                     return <Directory key = {i} name = {node.name} data = {node.data}/>
                                } else if(node.type === 'file' || node.type === 'exec') {
                                    return <Document key = {i} name = {node.name} />    
                                }
                            })}
                       </div>
                       <p>{this.props.name}</p>
                      {this.state.isChildVisible ? <Directory data = {this.props.data} /> : null}
                    </div>
            );
    }
}
export default Directory;