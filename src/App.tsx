import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Input from './components/Input'

function App (): JSX.Element {
  const [validated, setValidated] = useState(false)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    const form = event.currentTarget
    console.log(!form.checkValidity())

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
        className={`row g-3 needs-validation ${validated ? 'was-validated' : ''}`}
        noValidate
      >
        <Input label="nome" name="name" />
        <Input label="email" name="email" type={'email'} />
        <Input label="telefone" name="phone" type={'number'} />
        <Input label="CPF" name="cpf" type={'number'} />
        <button type="submit">Enviar</button>
      </form>
    </div>
  )
}

export default App
