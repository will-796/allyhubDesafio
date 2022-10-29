import React from 'react'

interface travelProps {
  travels: {
    cities: string[]
    countries: string[]
  }
  removeTravel: (travelType: 'cities' | 'countries', city: string) => void
}

const ShowTravels = ({ travels, removeTravel }: travelProps): JSX.Element => {
  const { cities, countries } = travels
  return (
    <div className=' d-flex flex-wrap gap-2'>
      {cities
        .map((city) => (
          <span key={city} className='btn btn-info travel'>
            <span>{city}</span>
            <button
              className="btn-close"
              onClick={() => removeTravel('cities', city)}
            />
          </span>
        ))}
      {countries.map((country) => (
        <span key={country} className='btn btn-success travel'>
          <span>{country}</span>
          <span
            className="btn-close"
            onClick={() => removeTravel('countries', country)}
          />
        </span>
      ))}
    </div>
  )
}

export default ShowTravels
