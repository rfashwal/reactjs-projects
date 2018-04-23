import React, { Component } from 'react';
import './App.css';
import UserInput from './1-basics/UserInput.js'
import UserOutput from './1-basics/UserOutput.js'
import ValidationComponent from './2-Lists/ValidationComponent'
import CharComponent from './2-Lists/CharComponent'

class App extends Component {

  state = {
    userName : 'Rabieh',
    inputText : '',
    inputChars: []
  }

  changeUserNameHandler =(event)=>{
    this.setState({
      userName :event.target.value
    });
  }

  inputTextChangehandler = (event)=>{
    this.setState({
      inputText : event.target.value,
      inputChars: event.target.value.split('')
    });
  }

  deleteCharHandler = (index)=>{
    const chars = [...this.state.inputChars];
    chars.splice(index, 1);
    this.setState({
      inputChars: chars,
      inputText: chars.join("")
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


    let characters = null;
    if(this.state.inputChars.length > 0)
    {
      characters = (
        <div>
          {
            this.state.inputChars.map((character,index)=>{
              return <CharComponent 
                        key={index} 
                        charValue={character}
                        click={()=> this.deleteCharHandler(index)} />
            })
          }
        </div>
      )
    }

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

      <h2>ReactJs Lists and Conditions</h2>
      <h4>Below points are done to show Lists and Conditions functionality in ReactJs</h4>
        <ol className="custom-counter">
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
        <input type='text' value={this.state.inputText} onChange={this.inputTextChangehandler} />
        <ValidationComponent textLength={this.state.inputText.length}/>
        {characters}
    </div>
    );
  }
}

export default App;
