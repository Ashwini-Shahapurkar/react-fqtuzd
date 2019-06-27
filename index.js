import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import ReactDOM from 'react-dom';
import Demo from './Demo.js'; 

/*
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
render(<App />, document.getElementById('root'));

//::::::::::::::::::::::::::::::;::correct
function Person(props){
  
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



//:::::::::::::::::::::::::::::::correct
class Test extends Component{
  render(){
  return  (
    <div className="test">
    <h1>hello world learning react is my dream</h1>
    </div>
    );
  }
}
//::::::::::::::::::::::::::::::CORRECT
//ReactDOM.render(<Test /> ,document.getElementById("test"));

//:::::::::::::::::::::::::::::CORRECT
ReactDOM.render(<Test />,document.querySelector("#test"));
*/

/*
//::::::::::::::::::::::::::::correct??????????????????????????
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


//:::::::::::::::::::::::::::::::::correct?????????????????
var u=567;
console.log(u);

const myhometown=<h1>Aurangabad</h1>
//::::::::::::::::::::::::::correct
//ReactDOM.render(myhometown);

//:::::::::::::::::::::::correct
//ReactDOM.render(myhometown,document.getElementById("town"));

ReactDOM.render(myhometown,document.querySelector("#town"));
*/

//classes creation of object
//::::::::::::::correct
class Car {
  constructor(name) {
    this.brand = name;
  }
  }

var mycar = new Car("Ford");
document.write(mycar.brand);
console.log(mycar.brand);

//how to write object in reactdom ??????????????error
//ReactDOM.render(<mycar name="suzuki"/>,document.querySelector("#car"));

//class creation of method inside classes
//:::::::::::::::::::::correct
class RollNo{
  constructor(no){
    this.id=no;
  }
 
  present(){
    return "   i have this roll no" +this.id;
  }
}

var student1=new RollNo(20057645);
document.write(student1.id);
console.log(student1.id);
document.write(student1.present());

//inherited classes
class Tree {
  constructor(name) {
    this.fruit = name;
  }

  present1() {
    return '   I have a ' + this.fruit;
  }
}

class Branch extends Tree {
  constructor(name, co) {
    super(name);
    this.color = co;
  }  
  show() {
      return this.present1() + ', it is  ' + this.color;
  }
}

var myfav = new Branch("apple", "red");
document.write(myfav.show());

//function concate with variable
//:::::::::::::::::::::correct 
var w=420;
var hello = function() {
  return "   Hello World! from hello function"+" "+w;
}
document.write(hello());
console.log(hello());

//arrow function concated with other function
//:::::::::::::correct
var joy=()=>{
  return "i am joy....hello from joy ....arrow function"+hello();
}
document.write(joy());
console.log(joy());