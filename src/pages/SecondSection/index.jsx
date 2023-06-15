import * as C from './style'

import Cards from '../../components/Cards'

import halfPigz from '../../assets/metade.svg'
import home from '../../assets/home.svg'
import cell from '../../assets/cell.svg'
import gestao from '../../assets/gestao.svg'
import print from '../../assets/print.svg'

function SecondSection() {
  return (
    <C.Container>
      <img className="half-img" src={halfPigz} alt="Logo" />
      <h2>Você tem um novo Pigzdido!</h2>
      <div className="cards">
        <Cards
          img={home}
          title="Marketplace"
          subtitle="Pra sua loja vender mais"
        />
        <Cards
          img={cell}
          title="É fácil e rápido"
          subtitle="Faça um pedido no Pigz"
        />
        <Cards
          img={gestao}
          title="Pigz gestão"
          subtitle="Você no controle, sempre"
        />
        <Cards
          img={print}
          title="Vias de impressão"
          subtitle="Personalizáveis"
        />
      </div>
      <h3>Tudo que você precisa por apenas R$199/mês</h3>
      <span>
        Tenha todas as funcionalidades Pigz sem taxa de adesão, sem comissão por
        cada venda, sem letrinhas miúdas.
      </span>
    </C.Container>
  )
}

export default SecondSection
