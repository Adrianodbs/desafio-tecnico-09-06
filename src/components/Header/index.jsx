import * as C from './style'
import logo from '../../assets/logo.svg'

function Header() {
  return (
    <C.Container>
      <img src={logo} alt="Logo" />
      <button>Já sou parceiro</button>
    </C.Container>
  )
}

export default Header
