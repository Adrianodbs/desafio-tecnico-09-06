import { styled } from 'styled-components'

function Input({ name, type, placeholder, className }) {
  return (
    <Label className={className}>
      <span>{name}</span>
      <input type={type} placeholder={placeholder} />
    </Label>
  )
}

const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 6px;

  span {
    color: #333333;
    font-size: 12px;
  }

  input {
    height: 48px;
    border: 1px solid #999999;
    border-radius: 12px;
    padding-left: 16px;

    &::placeholder {
      color: #cccccc;
    }
  }
`

export default Input
