import React from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string
  label: string
}

const Input = ({ name, label, ...rest }: InputProps): JSX.Element => {
  return (
    <div>
      <label htmlFor={name} className="form-label">
        {`${label}:`}
      </label>
      <input
        type="text"
        className="form-control"
        id={name}
        required
        {...rest}
      />
      <div className="invalid-feedback">
        Escolha um {label} válido.
      </div>
    </div>
  )
}

export default Input
