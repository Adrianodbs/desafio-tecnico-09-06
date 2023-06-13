import { styled } from 'styled-components'

export const Container = styled.section`
  background-color: #fff;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
  width: 100%;

  .half-img {
    position: absolute;
    top: -70px;
    z-index: 99;
    height: 140px;
  }

  h2 {
    margin: 95px 0 40px;
    font-weight: bold;
    font-size: 32px;
    text-align: center;
  }

  h3 {
    padding: 0 40px;
    font-weight: bold;
    font-size: 32px;
    text-align: center;
    line-height: 40px;
    margin-bottom: 20px;
    color: #333333;
  }

  .cards {
    margin: 0 72px;
    width: 270px;
    max-width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 80px;
  }

  span {
    font-size: 16px;
    text-align: center;
    padding: 0 60px;
  }

  .lines {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 6px;
    padding: 36px 16px;
  }

  .line {
    background-color: #eeeeee;
    width: 88px;
    height: 4px;
    border-radius: 4px;
  }

  .line.active {
    background-color: #fa641e;
  }
`
