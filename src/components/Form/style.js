import { styled } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  padding: 32px 24px;
  border-radius: 24px;
  width: 100%;

  h2 {
    color: #333333;
    font-size: 28px;
    font-weight: 600;
  }

  h5 {
    color: #333333;
    font-size: 13px;
    font-weight: 400;
    margin-bottom: 24px;
  }

  p {
    font-size: 13px;
    color: #666666;
  }

  button {
    background: #fa641e;
    cursor: pointer;
    padding: 12px 24px;
    border: none;
    border-radius: 12px;
    color: #fff;
    font-size: 16px;
    font-weight: 500;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 20px;

  label {
    display: flex;
    flex-direction: column;
    gap: 6px;

    span {
      color: #333333;
      font-size: 12px;
    }

    input {
      height: 48px;
      border: 1px solid #999999;
      border-radius: 12px;
      padding-left: 16px;

      &::placeholder {
        color: #cccccc;
      }
    }
  }
`
