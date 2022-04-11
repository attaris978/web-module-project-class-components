import React from "react";
import styled from "styled-components";
import TodoList from "./TodoList";

const FormDiv = styled.div``;

export default class Form extends React.Component {
  render() {
    return (
      <FormDiv>
        <h2>Todos:</h2>
        <TodoList></TodoList>
        <input type="text" placeholder="Type a thing Todo" />
        <button 
         onClick={() => console.log("Submit clicked!")}>Submit</button>
        <button
        onClick={() => console.log("Show/Hide Clicked!")}>Completed Button</button>
      </FormDiv>
    );
  }
}
