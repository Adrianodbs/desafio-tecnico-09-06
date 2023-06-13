import * as C from './style'

import phones from '../../assets/phones.png'

function InfoContainer() {
  return (
    <C.Container>
      <h5>Pigz Marketplace</h5>
      <C.Info>
        <p>
          Além de uma página exclusiva, com o Pigz Marketplace sua loja terá
          mais visibilidade, no app e no site. Uma vitrine com milhares de
          clientes todos os dias, pra vender muito mais.
        </p>
        <img src={phones} alt="Celulares" />
      </C.Info>
      <h2>E mais: suporte que realmente funciona!</h2>
      <span>
        Respostas automáticas e robôs?
        <br /> Aqui não. Nossa equipe está sempre disponível pra ajudar você e
        seus clientes.{' '}
      </span>
    </C.Container>
  )
}

export default InfoContainer
