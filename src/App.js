import React, { Component } from 'react';
import './App.css';
import UserInput from './1-basics/UserInput.js'
import UserOutput from './1-basics/UserOutput.js'

class App extends Component {

  state = {
    userName : 'Rabieh'
  }

  changeUserNameHandler =(event)=>{
    this.setState({
      userName :event.target.value
    });
  }

  render() {
    const style = {
    color: 'darkblue',
    height: '28px',
    paddingLeft: '10px',
    textDecoration: 'none',
    border:'1px solid #777'
    };
    return (
      <div className="App">   
      <h2>ReactJs Basics</h2>
      <h4>Below points are done to show the basic features of ReactJs</h4>
        <ol className="custom-counter">
          <li>Create TWO new components: UserInput and UserOutput</li>
          <li>UserInput should hold an input element, UserOutput two paragraphs</li>
          <li>Output multiple UserOutput components in the App component (any paragraph texts of your choice)</li>
          <li>Pass a username (of your choice) to UserOutput via props and display it there</li>
          <li>Add state to the App component (=> the username) and pass the username to the UserOutput component</li>
          <li>Add a method to manipulate the state (=> an event-handler method)</li>
          <li>Pass the event-handler method reference to the UserInput component and bind it to the input-change event</li>
          <li>Ensure that the new input entered by the user overwrites the old username passed to UserOutput</li>
          <li>Add two-way-binding to your input (in UserInput) to also display the starting username</li>
          <li>Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets</li>
        </ol>   
      <UserOutput userName={this.state.userName} />
      <UserInput customStyle={style} userNameChanged={this.changeUserNameHandler} userName={this.state.userName}/>

      </div>
    );
  }
}

export default App;
