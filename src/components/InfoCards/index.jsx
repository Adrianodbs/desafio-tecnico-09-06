import React from 'react'
import { styled } from 'styled-components'

function InfoCards({ title, subtitle, price, button }) {
  const content = [
    'Pigz Marketplace',
    'Página exclusiva',
    'Pigz Gestão Desktop e Mobile',
    'Gestão de entregadores',
    'Vias de impressão personalizáveis'
  ]
  return (
    <Card>
      <h3>{title}</h3>
      <span>{subtitle}</span>

      {content.map((item, index) => (
        <p key={index}>{item}</p>
      ))}

      <h4>{price}</h4>
      <button>{button}</button>
    </Card>
  )
}

const Card = styled.div`
  background-color: #fafafa;
  border-radius: 48px;
  width: 100%;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 20px;

  h3 {
    color: #333333;
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 4px;
  }

  span {
    color: #666666;
    margin: 0;
    margin-bottom: 20px;
    font-size: 16px;
    font-weight: 500;
    text-align: left;
  }

  p {
    color: #333333;
    font-size: 14px;
    font-weight: 400;
  }

  p:not(:last-child) {
    margin-bottom: 10px;
  }

  h4 {
    color: #333333;
    font-size: 20px;
    font-weight: bold;
    background-color: #ffffff;
    padding: 14px 24px;
    border-radius: 24px;
    margin: 40px 0 20px;
  }

  button {
    width: 100%;
    border: none;
    height: 56px;
    color: #ffffff;
    font-size: 16px;
    font-weight: 500;
    background: linear-gradient(to right, #ff881f, #fa641e);
    border-radius: 36px;
    box-shadow: 0px 10px 10px rgba(250, 100, 30, 0.4);
  }
`

export default InfoCards
