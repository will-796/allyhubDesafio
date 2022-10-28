import React from 'react'

interface travelProps {
  travels: {
    cities: string[]
    countries: string[]
  }
  removeTravel: (travelType: string, city: string) => void
}

const ShowTravels = ({ travels, removeTravel }: travelProps): JSX.Element => {
  const { cities, countries } = travels
  return (
    <div>
      {cities
        .sort((a, b) => (a < b ? -1 : a > b ? 1 : 0))
        .map((city) => (
          <span className="label" key={city}>
            <span>{city}</span>
            <button
              className="btn-close"
              onClick={() => removeTravel('cities', city)}
            />
          </span>
        ))}
      {countries.map((country) => (
        <span className="label" key={country}>
          <span>{country}</span>
          <button
            className="btn-close"
            onClick={() => removeTravel('countries', country)}
          />
        </span>
      ))}
    </div>
  )
}

export default ShowTravels
