import { styled } from 'styled-components'

export const Container = styled.section`
  width: 100%;
  background: linear-gradient(158deg, #fa641e, #ff881f);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 32px 16px;
  position: relative;

  overflow: hidden;

  .burguer {
    width: 110px;
    height: 250px;
    object-fit: cover;
    position: absolute;
    top: 0px;
    right: -25px;
  }

  h1 {
    width: 100%;
    color: #ffffff;
    font-size: 40px;
    font-weight: bold;
    align-self: flex-start;
    z-index: 99;
    margin-right: 50px;
  }

  p {
    color: #ffffff;
    font-size: 16px;
    font-weight: 300;
    margin: 20px 0 40px;
  }
`
