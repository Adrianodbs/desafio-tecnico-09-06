import { useState } from 'react'
import Input from '../Input'
import * as C from './style'
import SelectInput from '../SelectInput'

const estados = [
  { value: 'AC', label: 'Acre' },
  { value: 'AL', label: 'Alagoas' },
  { value: 'AP', label: 'Amapá' },
  { value: 'AM', label: 'Amazonas' },
  { value: 'BA', label: 'Bahia' },
  { value: 'CE', label: 'Ceará' },
  { value: 'DF', label: 'Distrito Federal' },
  { value: 'ES', label: 'Espírito Santo' },
  { value: 'GO', label: 'Goiás' },
  { value: 'MA', label: 'Maranhão' },
  { value: 'MT', label: 'Mato Grosso' },
  { value: 'MS', label: 'Mato Grosso do Sul' },
  { value: 'MG', label: 'Minas Gerais' },
  { value: 'PA', label: 'Pará' },
  { value: 'PB', label: 'Paraíba' },
  { value: 'PR', label: 'Paraná' },
  { value: 'PE', label: 'Pernambuco' },
  { value: 'PI', label: 'Piauí' },
  { value: 'RJ', label: 'Rio de Janeiro' },
  { value: 'RN', label: 'Rio Grande do Norte' },
  { value: 'RS', label: 'Rio Grande do Sul' },
  { value: 'RO', label: 'Rondônia' },
  { value: 'RR', label: 'Roraima' },
  { value: 'SC', label: 'Santa Catarina' },
  { value: 'SP', label: 'São Paulo' },
  { value: 'SE', label: 'Sergipe' },
  { value: 'TO', label: 'Tocantins' }
]

const cidade = [
  { value: 'A', label: 'A' },
  { value: 'B', label: 'B' },
  { value: 'C', label: 'C' },
  { value: 'D', label: 'D' }
]

function FormStyle() {
  const [formState, setFormState] = useState(0)

  return (
    <>
      {formState === 0 && (
        <C.Container>
          <h2>Quero vender no Pigz</h2>
          <h5>Dê o primeiro passo para aumentar suas vendas</h5>

          <C.Form>
            <Input name="Nome" type="text" placeholder="Leonercio Goesfeeld" />
            <Input
              name="Email"
              type="email"
              placeholder="leonercio.goesfeeld@email.com"
            />
            <Input name="Telefone" type="text" placeholder="(95) 99876-5432" />
          </C.Form>

          <p>
            Ao continuar, aceito que a Pigz entre em contato comigo por
            telefone, e-mail ou Whatsapp.
          </p>
          <button
            onClick={() => {
              setFormState(1)
            }}
          >
            Continuar
          </button>
        </C.Container>
      )}
      {formState === 1 && (
        <C.Container>
          <h2>Onde fica a sua loja?</h2>

          <C.Form>
            <Input name="CEP" type="text" placeholder="00000-00" />
            <div className="local">
              <SelectInput
                name="Estado"
                placeholder="UF"
                options={estados}
                className="state"
              />
              <SelectInput
                name="Cidade"
                placeholder="Selecione"
                options={cidade}
                className="city"
              />
            </div>

            <Input name="Endereço" type="text" placeholder="Avenida Brasil" />

            <div className="address">
              <Input
                className="number"
                name="Número"
                type="text"
                placeholder="123"
              />
              <Input
                className="complement"
                name="Complemento"
                type="text"
                placeholder="Sala 1"
              />
            </div>
          </C.Form>

          <button
            onClick={() => {
              setFormState(2)
            }}
          >
            Próximo
          </button>
        </C.Container>
      )}
      {formState === 2 && (
        <C.Container>
          <h2>Me conta um pouco sobre a sua loja</h2>
          <C.Form>
            <Input
              name="Nome da loja"
              type="text"
              placeholder="restaurante todo mundo gosta"
            />
            <Input
              name="CNPJ da loja"
              type="text"
              placeholder="12.345.678/0001-99"
            />
            <SelectInput
              name="Tipo da loja"
              placeholder="Selecione"
              options={cidade}
              className="address"
            />
          </C.Form>

          <button
            onClick={() => {
              setFormState(0)
            }}
          >
            Concluir
          </button>
        </C.Container>
      )}
    </>
  )
}

export default FormStyle
