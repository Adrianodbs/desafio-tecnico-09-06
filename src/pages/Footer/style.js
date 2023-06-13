import { styled } from 'styled-components'

export const FooterContainer = styled.footer`
  background-color: #fafafa;
  padding: 64px 16px 30px;
  display: flex;
  flex-direction: column;

  .line {
    border-bottom: 0.3px solid #666666;
    margin: 70px 0 10px;
  }
`

export const HeaderFooter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 64px;

  .logo {
    width: 80px;
    height: 40px;
    margin-bottom: 8px;
  }

  p {
    font-size: 11px;
    color: #676767;
    margin-bottom: 24px;
  }

  span {
    color: #676767;
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 16px;
  }

  .images {
    display: flex;
    gap: 10px;
  }
`

export const info = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;

  h4 {
    font-size: 16px;
    color: #676767;
    font-weight: 600;
    margin-bottom: 24px;
  }

  a {
    text-decoration: none;
    font-size: 14px;
    color: #666666;
    margin-bottom: 24px;
  }
`

export const Contact = styled.div`
  display: flex;
  flex-direction: column;

  h4 {
    font-size: 16px;
    color: #676767;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 15px;
    margin-bottom: 24px;
  }

  span {
    color: #676767;
    font-size: 14px;
    margin-bottom: 24px;
  }

  h5 {
    color: #676767;
    font-size: 16px;
    margin-bottom: 16px;
  }

  .redes {
    display: flex;
    gap: 15px;
  }
`

export const BottomInfo = styled.div`
  display: flex;
  flex-direction: column;
  .links {
    display: flex;
    gap: 30px;
    margin-bottom: 24px;

    a {
      text-decoration: none;
      color: #666666;
      font-size: 12px;
    }
  }

  .copyright {
    display: flex;
    gap: 30px;
    justify-content: space-between;

    .text {
      display: flex;
      flex-direction: column;

      p {
        font-size: 10px;
        color: #676767;
      }
    }
  }
`
