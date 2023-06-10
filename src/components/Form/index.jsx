import * as C from './style'

function FormStyle() {
  return (
    <C.Container>
      <h2>Quero vender no Pigz</h2>
      <h5>Dê o primeiro passo para aumentar suas vendas</h5>

      <C.Form>
        <label>
          <span>Nome</span>
          <input type="text" placeholder="Leonercio Goesfeeld" />
        </label>
        <label>
          <span>Email</span>
          <input type="text" placeholder="leonercio.goesfeeld@email.com" />
        </label>
        <label>
          <span>Telefone</span>
          <input type="text" placeholder="(95) 99876-5432" />
        </label>
      </C.Form>

      <p>
        Ao continuar, aceito que a Pigz entre em contato comigo por telefone,
        e-mail ou Whatsapp.
      </p>
      <button>Continuar</button>
    </C.Container>
  )
}

export default FormStyle
