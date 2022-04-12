import React from "react";
import Todo from "./Todo";
import styled from 'styled-components';

const TodoListDiv = styled.div`
display:flex;
flex-flow:column nowrap;

`
export default class TodoList extends React.Component {
  render() {
    return (
      <TodoListDiv>
        {this.props.todos.map((todoItem) => {
          return (
            <Todo
              key={todoItem.name}
              name={todoItem.name}
              completed={todoItem.completed}
              toggleItem={this.props.toggleItem}
              id={todoItem.id}
            />
          );
        })}
      </TodoListDiv>
    );
  }
}
