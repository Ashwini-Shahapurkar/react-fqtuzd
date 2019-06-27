import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import ReactDOM from 'react-dom';
import Demo from './Demo.js'; 

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />    
      </div>
    );
  }
}

//::::::::::::::::::::::::::::::::correct
//render(<App />, document.getElementById('root'));

//::::::::::::::::::::::::::::::;::correct
/*function Person(props){
  
  return (
    <div className="person">
    <h1>{props.firstname}</h1>
    <p>age :{props.age}</p>
    </div>
  );
  
}

var app1=(
  <div>
  <Person firstname="ashwini" age="22"/>
  <Person firstname="neha" age="24"/>
</div>
)

ReactDOM.render(app1,document.querySelector("#app1"));
*/


//:::::::::::::::::::::::::::::::correct
/*class Test extends Component{
  render(){
  return  <h1>hello world learning react is my dream</h1>
  }
}
ReactDOM.render(<Test />,document.querySelector("#test"));
*/

//::::::::::::::::::::::::::::correct
var x=33;
class Externalfile extends Component{
  render(){
    return (
      <div>
      {console.log(x)}
      <Demo />
      </div>
    );

}
}
ReactDOM.render(<Externalfile />,document.querySelector("#app2"));

//:::::::::::::::::::::::::::::::::correct
var u=567;
console.log(u);