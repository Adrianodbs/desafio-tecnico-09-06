import * as C from './style'

import logo from '../../assets/pigz-logotipo-colorido.svg'
import app from '../../assets/app.svg'
import google from '../../assets/google.svg'
import fale from '../../assets/fale.svg'
import facebook from '../../assets/facebook.svg'
import instagram from '../../assets/instagram.svg'
import youtube from '../../assets/youtube.svg'
import linkedin from '../../assets/linkedin.svg'
import orange from '../../assets/orange.svg'

function Footer() {
  return (
    <C.FooterContainer>
      <C.HeaderFooter>
        <img className="logo" src={logo} alt="Logo" />
        <p>Tudo o que você precisa</p>
        <span>Baixe o APP</span>
        <div className="images">
          <img src={app} alt="app store" />
          <img src={google} alt="play store" />
        </div>
      </C.HeaderFooter>

      <C.info>
        <h4>Pigz</h4>
        <a href="#">Sobre o Pigz</a>
        <a href="#">Portal do parceiro</a>
        <a href="#">Quero ser um Pigz Partner</a>
      </C.info>

      <C.Contact>
        <h4>
          <img src={fale} alt="Fale conosco" />
          Fale conosco
        </h4>
        <span>falecom@pigz.com.br</span>
        <span>(95) 3224-2603</span>
        <h5>Pigz nas redes</h5>
        <div className="redes">
          <img src={linkedin} alt="LinkedIn" />
          <img src={instagram} alt="instagram" />
          <img src={facebook} alt="facebook" />
          <img src={youtube} alt="youtube" />
        </div>
      </C.Contact>
      <div className="line"></div>

      <C.BottomInfo>
        <div className="links">
          <a href="#">Nosso termos</a>
          <a href="#">Privacidade</a>
          <a href="#">Ajuda</a>
        </div>
        <div className="copyright">
          <div className="text">
            <p>copyright 2021 · Pigz · Todos os direitos reservados</p>
            <p>Orange Labs Tecnologia LTDA. CNPJ 34.895.008/0001-85</p>
          </div>
          <img src={orange} alt="Logo orange" />
        </div>
      </C.BottomInfo>
    </C.FooterContainer>
  )
}

export default Footer
