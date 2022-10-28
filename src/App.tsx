import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Input from './components/Input'
import { maskCpf, maskPhone } from './masksInput/mask'
import axios from 'axios'
import Select from './components/Select'
import ShowTravels from './components/ShowTravels'

interface UserInfo {
  name: string
  email: string
  cpf: string
  phone: string
  countries: string[]
  cities: string[]
}

function App (): JSX.Element {
  const [validated, setValidated] = useState(false)
  const [apiResponse, setApiResponse] = useState({
    city: [],
    country: []
  })
  const [info, setInfo] = useState<UserInfo>({
    name: '',
    email: '',
    cpf: '',
    phone: '',
    countries: [],
    cities: []
  })

  const { countries, cities } = info

  useEffect(() => {
    const promiseCountry = axios.get('https://amazon-api.sellead.com/country')
    const promiseCity = axios.get('https://amazon-api.sellead.com/city')
    Promise.all([promiseCity, promiseCountry])
      .then(([{ data: city }, { data: country }]) =>
        setApiResponse({ city, country })
      )
      .catch((error) => console.log(error))
  }, [])

  const maskInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { classList } = event.target

    if (classList.contains('mask-phone')) {
      maskPhone(event)
    }
    if (classList.contains('mask-cpf')) {
      maskCpf(event)
    }
  }
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target
    maskInput(event)
    setInfo({ ...info, [name]: value })
  }

  const handlesTravelChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
    travel: 'countries' | 'cities'
  ): void => {
    const { value } = event.target
    if (info[travel].includes(value)) {
      return
    }
    setInfo({ ...info, [travel]: [...info[travel], value] })
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    const form = event.currentTarget

    if (!form.checkValidity()) {
      event.preventDefault()
      event.stopPropagation()
    }
    setValidated(true)
    console.log(info)
  }

  const removeTravel = (travelType: string, travel: string): void => {
    const filteredCities = cities.filter((city) => city !== travel)
    setInfo({ ...info, [travelType]: filteredCities })
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
        <Input
          label="telefone"
          name="phone"
          onChange={handleChange}
          mask={'phone'}
        />
        <Input label="CPF" name="cpf" onChange={handleChange} mask={'cpf'} />
        <Select
          options={apiResponse.city}
          onChange={(event) => handlesTravelChange(event, 'cities')}
          value={''}
          selectType={'cities'}
        />
        <Select
          options={apiResponse.country}
          onChange={(event) => handlesTravelChange(event, 'countries')}
          value={''}
          selectType={'countries'}
        />
        <ShowTravels
          travels={{ cities, countries }}
          removeTravel={removeTravel}
        />

        <button type="submit">Enviar</button>
      </form>
    </div>
  )
}

export default App
