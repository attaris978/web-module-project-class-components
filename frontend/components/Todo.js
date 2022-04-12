import React from 'react'
import styled from 'styled-components';

const TodoDiv = styled.div`
display:flex;
justify-content: space-around;
align-content: space-around;
height:2rem;
background-color:lightgrey;
border-radius:10px;
margin:.7rem;
& p {
  text-align:center;
  margin:auto;
  font-weight:900;
  font-size:1rem;  
}
&.completed {
    color:rgba(255,10,10,.7);
    
  }
`
export default class Todo extends React.Component {
  render() {
    return (
      <TodoDiv
      className={this.props.completed ? 'completed' : ''}
      onClick={() => this.props.toggleItem(this.props.id)}>
        <p>{this.props.name}</p>
      </TodoDiv>
    )
  }
}
