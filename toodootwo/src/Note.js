import React, { Component } from 'react';

import {NotesList} from './NotesList';

import {InputUser} from './InputUser';

import styles from './styles';

class NotesContainer extends Component {
  constructor(props){
    super(props);
    this.state = { 
    notes: [
      {id:0,text:'Test note'},
      {id:1,text:'Hi mom'}
    ],
    inputValue : '',
    counter : 2
  };  

    this.deleteNote = this.deleteNote.bind(this);
    this.addNote = this.addNote.bind(this);
    this.userInputHandler = this.userInputHandler.bind(this);
    this.onClickHandler = this.onClickHandler.bind(this);
  };
  //NotesList
  deleteNote(id){
    this.setState({
      notes: this.state.notes.filter(note => note.id !== id)
    });
  };

  addNote(id, input){
    let newNote = {
      id,
      text:input
    }
    this.setState({
      notes: [...this.state.notes,newNote] ,
      counter : this.state.counter + 1
    });
  };
  
  //InputUser
  userInputHandler(e){
      this.setState({
        inputValue: e.target.value
      });
  };

  onClickHandler(){
    if(this.state.inputValue !== ''){
      this.addNote((this.state.counter),(this.state.inputValue));
    }
    this.setState({
      inputValue: ""
    });
  }

  render() {
    return (
      <div style={styles.container}>
        <InputUser 
          inputValue={this.state.inputValue}
          onChangeHandler={this.userInputHandler}
          onClick={this.onClickHandler}
        />
        <NotesList 
          notes={this.state.notes} 
          deleteNote={this.deleteNote}
        />
      </div>
    );
  }
}

export default NotesContainer;

