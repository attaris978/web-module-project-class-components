import React from "react";
import styled from "styled-components";
import Form from "./Form";

const todos = [
  {
    name: "The thing",
    id: 1,
    completed: false,
  },
  {
    name: "The next thing",
    id: 2,
    completed: false,
  },
];

const AppWrap = styled.div``;
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todos,
    };
  }

  addItem = (itemName) => {
    const newItem = {
      name: itemName,
      id: Date.now(),
      completed: false,
    };
    this.setState({
      todos: [...this.state.todos, newItem],
    });
  };

  toggleItem = (itemId) => {
    this.setState({
      todos: this.state.todos.map((item) =>
        item.id === itemId ? { ...item, completed: !item.completed } : item
      ),
    });
    console.log("click test");
  };

  render() {
    return (
      <AppWrap>
        <Form
          todos={this.state.todos}
          toggleItem={this.toggleItem}
          addItem={this.addItem} />
      </AppWrap>
    );
  }
}
