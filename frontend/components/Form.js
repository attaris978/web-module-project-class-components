import React from "react";
import styled from "styled-components";
import TodoList from "./TodoList";

const FormDiv = styled.div`
display:flex;
flex-flow: column nowrap;
`;

export default class Form extends React.Component {
  
constructor () {
  super();
  this.state = {
    todoText: ''
  }
}

handleChange = e => {
  this.setState({
    todoText: e.target.value
  })
}

  handleSubmit = e => {
    e.preventDefault();
    this.props.addItem(this.state.todoText);
    this.setState({
      todoText: ''
    })
  }


  render() {
    return (
      <FormDiv>
        <h2>Todos:</h2>
        <TodoList todos={this.props.todos} toggleItem={this.props.toggleItem}></TodoList>
        <input
          type="text"
          placeholder="Type a thing Todo"
          value={this.state.todoText}
          onChange={e => this.handleChange(e)} />
        <button 
         onClick={e => this.handleSubmit(e)}>Submit</button>
        <button
        onClick={() => this.props.clearCompleted()}>Clear Completed</button>
      </FormDiv>
    );
  }
}
