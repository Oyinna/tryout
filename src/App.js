import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'; 

// import UserInput from './Assignment/Assignment1'; 

 export class App extends Component {
  state = {
    person:[
      {name:"Chinyelu", age:25},
      {name:"Chika", age:31},
      {name:"Onyi", age:24}
    ],
    otherstate:"something",
    showPerson:false
  }

  switchNameHandler = (newName) =>{
    // console.log("was clicked!");
    this.setState({
      persons:[
        {name:newName, age:25},
        {name:"Chika", age:31},
        {name:"Onyi", age:24}
      ], 
      otherstate:"changed"
    })
  }

  showPersonHandler = ()=>{
    const doseShowPerson = this.state.showPerson;
    this.setState({showPerson:!doseShowPerson});
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons:[
        {name:"Chiny", age:25},
        {name:"Peter", age:24},
        {name:event.target.value, age:31}
      ]
    })
  }

  render() {
    const style = {
      background: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };
    let persons = null;
    if(this.state.showPerson){
      persons = (
        <div>
        <Person name={this.state.person[0].name} age={this.state.person[0].age}/>
        <Person name={this.state.person[1].name} age ={this.state.person[1].age} click={this.switchNameHandler}> I'm improving </Person>
        <Person name={this.state.person[2].name} age={this.state.person[2].age} changed ={this.nameChangeHandler}/>
        {this.state.otherstate}
      </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm Ibute Chinyelu</h1>

        {/* <Person name="Chinyelu" age="25"/>
        <Person name="Chika" age ="32"> I'm improving </Person>
        <Person name="Onyi" age="24"/> */}

        <button style = {style} onClick={this.switchNameHandler.bind(this,"Chi")}>
          switch name
        </button>
        <button onClick={this.showPersonHandler}>
          switch name
        </button>
        {persons}
      </div>
    );
  }
}

 export default App;


// import React, { useState } from 'react';

// const app = (props) =>{
//         const [personState, setPersonState] = useState({
//            person:[
//             {name:"Chinyelu", age:25},
//             {name:"Chika", age:31},
//             {name:"Onyi", age:24}
//              ],
//              otherstate:"something"
//            } );

//         const switchNameHandler = () =>{
//              console.log("was clicked!");
//             setPersonState({
//             person:[
//             {name:"ChinyeluTest", age:25},
//             {name:"Chika", age:31},
//             {name:"Onyi", age:24}
//             ], 
//             otherstate:"changed"
//             })}

//         return (
//           <div className="App">
//             <h1>Hi, I'm Ibute Chinyelu</h1>
    
//             {/* <Person name="Chinyelu" age="25"/>
//             <Person name="Chika" age ="32"> I'm improving </Person>
//             <Person name="Onyi" age="24"/> */}
    
//           <button onClick={switchNameHandler}>switch name</button>
//             <Person name={personState.person[0].name} age={personState.person[0].age}/>
//             <Person name={personState.person[1].name} age ={personState.person[1].age}> I'm improving </Person>
//             <Person name={personState.person[2].name} age={personState.person[2].age}/>
//             {personState.otherstate}
//           </div>
//         );
//       }
// export default app;
