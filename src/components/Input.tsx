import React from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string
  label: string
  mask?: string
}

const Input = ({ name, label, mask, ...rest }: InputProps): JSX.Element => {
  const classMask = `mask-${mask ?? ''}`
  return (
    <div>
      <label htmlFor={name} className="form-label">
        {`${label}:`}
      </label>

      <input
        type="text"
        className={`form-control ${classMask}`}
        id={name}
        name={name}
        required
        {...rest}
      />
      <div className="invalid-feedback">Escolha um {label} válido.</div>
    </div>
  )
}

export default Input
