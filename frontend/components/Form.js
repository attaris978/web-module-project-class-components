import React from "react";
import styled from "styled-components";
import TodoList from "./TodoList";

const FormDiv = styled.div``;

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
    this.props.addItem(this.state.todoText)
  }


  render() {
    return (
      <FormDiv>
        <h2>Todos:</h2>
        <TodoList todos={this.props.todos} toggleItem={this.props.toggleItem}></TodoList>
        <input
          type="text"
          placeholder="Type a thing Todo"
          onChange={e => this.handleChange(e)} />
        <button 
         onClick={e => this.handleSubmit(e)}>Submit</button>
        <button
        onClick={console.log("clicked")}>Completed Button</button>
      </FormDiv>
    );
  }
}
