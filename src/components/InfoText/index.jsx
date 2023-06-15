import { styled } from 'styled-components'

export default function InfoText({ text, img }) {
  return (
    <Info>
      <p>{text}</p>
      <img src={img} />
    </Info>
  )
}

const Info = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(to bottom, #fa641e, #ff881f);
  border-radius: 48px;
  margin-bottom: 80px;

  p {
    margin: 40px;
    color: #ffffff;
    font-size: 15px;
    text-align: center;
    font-weight: 200;
  }

  img {
    margin: 0 40px;
    max-height: 200px;
    height: 100%;
    max-width: 382px;
    width: 100%;
  }
`
