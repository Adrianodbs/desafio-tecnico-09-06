import styled from 'styled-components'

const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 6px;

  span {
    color: #333333;
    font-size: 12px;
  }

  select {
    height: 48px;
    width: 100%;
    border-radius: 12px;
    padding-left: 16px;
    color: #333333;

    &::placeholder {
      color: #cccccc;
    }
  }
`

export default function SelectInput({ name, placeholder, options, className }) {
  return (
    <Label htmlFor={name}>
      <span>{name}</span>
      <select id={name} name={name} className={className}>
        <option value="">{placeholder}</option>
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </Label>
  )
}
