import React from 'react'
import { styled } from 'styled-components'

export function ButtonStyle({ children }) {
  return <Button>{children}</Button>
}

const Button = styled.button`
  background: linear-gradient(to right, #fa641e, #ff881f);
  cursor: pointer;
  padding: 6px 24px;
  border: none;
  border-radius: 24px;
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  box-shadow: 0px 10px 10px rgba(250, 100, 30, 0.4);

  transition: all 0.2s;
  &:hover {
    opacity: 0.8;
  }
`
