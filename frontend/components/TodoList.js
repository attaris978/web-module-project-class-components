import React from "react";
import Todo from "./Todo";
export default class TodoList extends React.Component {
  render() {
    return (
      <div>
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
      </div>
    );
  }
}
