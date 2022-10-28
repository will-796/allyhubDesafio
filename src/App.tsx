import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Input from './components/Input'
import { maskCpf, maskPhone } from './masksInput/mask'

interface UserInfo {
  name: string
  email: string
  cpf: string
  phone: string
}

function App (): JSX.Element {
  const [validated, setValidated] = useState(false)
  const [info, setInfo] = useState<UserInfo>({
    name: '',
    email: '',
    cpf: '',
    phone: ''
  })

  const maskInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name } = event.target

    if (name === 'phone') {
      maskPhone(event)
    }
    if (name === 'cpf') {
      maskCpf(event)
    }
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target
    maskInput(event)
    setInfo({ ...info, [name]: value })
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    const form = event.currentTarget

    if (!form.checkValidity()) {
      event.preventDefault()
      event.stopPropagation()
    }
    setValidated(true)
  }

  return (
    <div className="App">
      <form
        action="submit"
        onSubmit={handleSubmit}
        className={`row g-3 needs-validation ${
          validated ? 'was-validated' : ''
        }`}
        noValidate
      >
        <Input label="nome" name="name" onChange={handleChange} />
        <Input
          label="email"
          name="email"
          type={'email'}
          onChange={handleChange}
        />
        <Input label="telefone" name="phone" onChange={handleChange} />
        <Input label="CPF" name="cpf" onChange={handleChange} />

        <button type="submit">Enviar</button>
      </form>
    </div>
  )
}

export default App
