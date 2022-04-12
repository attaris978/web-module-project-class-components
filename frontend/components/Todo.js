import React from 'react'
import styled from 'styled-components';

const TodoDiv = styled.div`
height:50px;
width:100px;
  .hidden {
    display:none;
  }
`
export default class Todo extends React.Component {
  render() {
    return (
      <TodoDiv
      className={this.props.completed ? 'hidden' : ''}
      onClick={() => this.props.toggleItem(this.props.id)}>
        {this.props.name}
      </TodoDiv>
    )
  }
}
