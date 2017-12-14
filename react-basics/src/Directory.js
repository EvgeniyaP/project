import React, { Component } from 'react';
// import Folder from './Folder';
import Document from './Document';


class Directory extends Component {
    constructor(props){
        super(props);
        this.state = { visibleChild: false }
    }
    toggle(){
        this.setState({ visibleChild: !this.state.visibleChild })
    }
    render() {
            return (
                    <div className="treeview">
                       <div className={this.state.visibleChild ? 'open' : 'close'} onClick={this.toggle.bind(this)}>
                    
                            {this.props.data.map((node, i) =>{
                        
                                if(node.type === 'dir') {
                                     return <Directory key = {i} name = {node.name} data = {node.data}/>
                                }
                                if(node.type === 'file' || node.type === 'exec') {
                                    return <Document key = {i} name = {node.name} />
                                }

                            })}
                       </div>
                       <p>{this.props.name}</p>

                       {this.state.visibleChild ? <Directory data = {this.props.data} /> : null}
                    </div>
            );
    }
}
export default Directory;
        
            // <div>
            //   {
            //    this.props.data && this.props.data.map((node, id) => {
            //     if (node.type === 'root'){
            //         let value = 'root';
            //         return <Directory key = {id} value = {value} data = {node.data} />
            //     } else if (node.type === 'dir'){
            //         return <Directory key = {id} value = {node.name} data = {node.data} />
            //     } else {
            //         return<Document key = {id} value = {node.name} />
            //     }
            //    })
            //   }
            // </div>

        //return (
                //<div>
                    //{this.props.data.map((node, id) =>{
                       // if(node.type === 'root'){
                         //   let name = 'root';
                           // return <Folder key = {id} name = {name} data = {node.data}/>
                        //}
                        //if(node.type === 'dir'){
                          //  return <Folder key = {id} name = {node.name} data = {node.data}/>
                        //}
                        //if(node.type === 'file' || node.type === 'exec'){
                          //  return <Document key = {id} name = {node.name} />
                        //}
                    //})}   
                //</div>
       // )
  //  }




  
    // renderView(data) {
    //     {
    //         this.props.data && this.props.data.map((node, id) => {

    //             return (
    //                 <Directory key={id} data={node.data} name={node.name} />
    //             );
    //         })
    //     }
    // }
                           // {
                             //  this.props.data.map((node, id) => {
                               //     return <Document key = {id} name = {node.name} data = {node.data} />
                               //})
                            //}
