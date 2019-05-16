import React from 'react'
import styled from 'styled-components'

const Box = styled.div`
  height: 250px;
  background-color: #de4d44;
  color: white;
  margin-top: 5px;
  flex: ${props => props.flex};

  text-align: center;
  vertical-align: middle;
  line-height: 150px;

  &:hover {
    cursor: pointer;
    background-color: #fc766a;
  }
`

const LinkBox = styled.a`
  height: 250px;
  background-color: #de4d44;
  color: white;
  margin-top: 5px;
  flex: ${props => props.flex};

  text-align: center;
  vertical-align: middle;
  line-height: 250px;

  &:hover {
    cursor: pointer;
    background-color: #fc766a;
  }
`

export default function box(props) {
  return props.href ? (
    <LinkBox href={props.href} flex={props.flex}>{props.children}</LinkBox>
  ) : (
    <Box>{props.children}</Box>
  )
}