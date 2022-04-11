import React from "react";
import styled from "styled-components";
import Form from "./Form";

const AppWrap = styled.div``;
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
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
      ],
    };
  }

  render() {
    return <AppWrap>
      <Form></Form>
    </AppWrap>;
  }
}
