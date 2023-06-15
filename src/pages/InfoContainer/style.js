import { styled } from 'styled-components'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 16px;

  h5 {
    font-weight: 600;
    font-size: 24px;
    color: #333333;
    text-align: center;
    margin-bottom: 40px;
  }

  h2 {
    color: #333333;
    text-align: center;
    font-size: 32px;
    font-weight: bold;
  }

  span {
    margin: 20px 64px 40px;
    text-align: center;
    color: #333333;
    font-size: 16px;
    font-weight: 400;
  }

  h6 {
    color: #333333;
    font-size: 16px;
    font-weight: 500;
    display: flex;
    align-items: center;
    margin: 37px 0 56px;

    img {
      width: 18px;
      margin: 0 7px 0 19px;
    }

    small {
      margin-right: 5px;
    }
  }

  .lines {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 6px;
    padding: 36px 16px;
    max-width: 100%;
  }

  .line {
    background-color: #eeeeee;
    cursor: pointer;
    width: 88px;
    height: 4px;
    border-radius: 4px;
  }

  .line.active {
    background-color: #fa641e;
  }
`
