import { styled } from 'styled-components'

function Cards({ img, title, subtitle }) {
  return (
    <Container>
      <img src={img} alt={title} />
      <h4>{title}</h4>
      <span>{subtitle}</span>
    </Container>
  )
}

const Container = styled.div`
  background-color: #fafafa;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 0;
  flex-direction: column;
  width: 100%;
  height: 243px;
  border-radius: 24px;
  border: 2px solid transparent;

  &:hover {
    border: 2px solid #cccccc;
  }

  img {
    width: 72px;
    margin-bottom: 32px;
  }

  h4 {
    font-weight: 600;
    font-size: 20px;
  }

  span {
    font-size: 16px;
  }
`

export default Cards
