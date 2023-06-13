import * as C from './style'

import phones from '../../assets/phones.png'
import whats from '../../assets/whats.png'

import InfoCards from '../../components/InfoCards'

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
      <InfoCards
        title="Pigz"
        subtitle="Tudo que você precisa"
        price="R$199/mês"
        button="Vender no Pigz agora"
      />
      <InfoCards
        title="Pagamento On-line"
        subtitle="Segurança e agilidade"
        price="2,99% por transação"
        button="Saiba mais"
      />
      <h6>
        Fale com a Pigz
        <img src={whats} alt="Whatsapp" />
        <small>95</small>3224-2603
      </h6>
    </C.Container>
  )
}

export default InfoContainer
