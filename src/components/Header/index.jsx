import * as C from './style'
import logo from '../../assets/logo.svg'
import { ButtonStyle } from '../Button'

function Header() {
  return (
    <C.Container>
      <img src={logo} alt="Logo" />
      <ButtonStyle>Já sou parceiro</ButtonStyle>
    </C.Container>
  )
}

export default Header
