import * as C from './style'

import whats from '../../assets/whats.png'
import phones from '../../assets/phones.png'
import line2 from '../../assets/line2.png'
import motoboy from '../../assets/motoboy.png'
import cartao from '../../assets/cartao.png'

import InfoCards from '../../components/InfoCards'
import InfoText from '../../components/InfoText'
import { useState } from 'react'

function InfoContainer() {
  const [line, setLine] = useState(0)
  return (
    <C.Container>
      <div className="lines">
        <div
          onClick={() => setLine(0)}
          className={`line ${line === 0 ? 'active' : ''}`}
        ></div>
        <div
          onClick={() => setLine(1)}
          className={`line ${line === 1 ? 'active' : ''}`}
        ></div>
        <div
          onClick={() => setLine(2)}
          className={`line ${line === 2 ? 'active' : ''}`}
        ></div>
        <div
          onClick={() => setLine(3)}
          className={`line ${line === 3 ? 'active' : ''}`}
        ></div>
      </div>
      <h5>Pigz Marketplace</h5>
      {line === 0 && (
        <InfoText
          text="Além de uma página exclusiva, com o Pigz Marketplace sua loja terá mais
        visibilidade, no app e no site. Uma vitrine com milhares de clientes
        todos os dias, pra vender muito mais."
          img={phones}
        />
      )}

      {line === 1 && (
        <InfoText
          text="Acompanhe suas vendas em tempo real, no computador ou no celular, de onde estiver. Faça alterações de preços e disponibilidade de produtos rapidamente, como deve ser."
          img={line2}
        />
      )}

      {line === 2 && (
        <InfoText
          text="A ferramenta ideal pra quem tem entrega própria. Controle de entregas por motoboy, geração de relatórios por entregas e por taxas de entrega, individualmente."
          img={motoboy}
        />
      )}

      {line === 3 && (
        <InfoText
          text="Segurança e agilidade para receber e entregar pedidos. Seus clientes pagam com Pix ou cartão de crédito pelo app, e o entregador nem precisa levar a maquininha de cartão."
          img={cartao}
        />
      )}

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
