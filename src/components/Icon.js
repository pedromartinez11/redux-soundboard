import React from 'react'
import styled from 'styled-components'

const Icon = styled.div`
  display: inline-block;
  line-height: 0;
  ${({compact}) => compact || 'padding: .5rem'};
  margin: .5rem;
  border-radius: 100%;
  &:active {
    background: ${({active}) => active || '#222'};
  }
`

// Nesting because of border-radius
export default ({compact, active, ...props}) => (
  <Icon {...{compact, active}}><img alt={props.alt} {...props}/></Icon>
)