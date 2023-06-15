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

    transition: all 0.2s;
    &:hover {
      opacity: 0.8;
    }
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 20px;

  .local {
    display: flex;
    gap: 15px;
    width: 100%;
    justify-content: space-between;

    .state {
      width: 114px;
      @media (max-width: 400px) {
        width: 80px;
      }
    }

    .city {
      width: 205px;
      @media (max-width: 400px) {
        width: 150px;
      }
    }
  }

  .address {
    margin-bottom: 30px;
    display: flex;
    justify-content: space-between;
    gap: 15px;
    width: 100%;

    .number {
      width: 114px;
      @media (max-width: 400px) {
        width: 80px;
      }
    }

    .complement {
      width: 205px;
      @media (max-width: 400px) {
        width: 150px;
      }
    }
  }
`
