import React, { Component } from 'react';
import './App.css';
import Directory from './Directory';

class App extends Component { 
  constructor(props){
      super(props);
      this.state = { data: [] }
  }

  componentWillMount(){
      fetch('https://raw.githubusercontent.com/kottans/chernivtsi-frontend-2017/master/homeworks/react-basic/filetree.json')
          .then(response => response.json())
          .then(data =>{
              this.setState({data: this.state.data.concat(data)})
          })
          .catch(err => console.log(err));
  }
  render() {
    return (
            <div className="wrapper">
                <Directory data = {this.state.data} name = "root"/>
            </div>
    );
  }
}
export default App;