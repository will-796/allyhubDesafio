import React from 'react'

interface city {
  name: string
  name_ptbr: string
}

interface country {
  name: string
  name_ptbr: string
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: city[] | country[]
  selectType: 'cities' | 'countries'
}

const Select = ({ options, selectType, ...rest }: SelectProps): JSX.Element => {
  return (
    <select {...rest} className="form-select" required>
      <option>Selecione uma {selectType}</option>
      {options
        .sort((a, b) =>
          a.name_ptbr < b.name_ptbr ? -1 : a.name_ptbr > b.name_ptbr ? 1 : 0
        )
        .map((option, index) => (
          <option key={index}>
            {option.name_ptbr === null ? option.name : option.name_ptbr}
          </option>
        ))}
    </select>
  )
}

export default Select
