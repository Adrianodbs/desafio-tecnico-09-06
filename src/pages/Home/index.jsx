import * as C from './style'
import burguer from '../../assets/burguer_2@3x.png'
import FormStyle from '../../components/Form'

function Home() {
  return (
    <C.Container>
      <img src={burguer} alt="Burguer" className="burguer" />
      <h1>
        Pigz: tudo que <br /> você precisa <br /> pra vender <br /> ainda mais!
      </h1>
      <p>
        Temos uma equipe ansiosa para cadastrar seus produtos no Pigz
        Marketplace e deixar sua loja prontinha para iniciar as vendas.
      </p>
      <FormStyle />
    </C.Container>
  )
}

export default Home
