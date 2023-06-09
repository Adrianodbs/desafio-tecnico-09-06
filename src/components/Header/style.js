import styled from 'styled-components'

export const Container = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;

  img {
    width: 60px;
    height: 32px;
  }

  button {
    background: linear-gradient(to right, #fa641e, #ff881f);
    cursor: pointer;
    padding: 6px 24px;
    border: none;
    border-radius: 24px;
    color: #fff;
    font-size: 14px;
    font-weight: 500;
    box-shadow: 0px 10px 10px rgba(250, 100, 30, 0.4);
  }
`
