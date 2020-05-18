import React from 'react'

const Persons = ({ filterName, persons }) => {
  return (
    <div>
      {persons.map(e => {
        if (e.name.includes(filterName)) {
          return <div key={e.name}>{e.name} {e.number}</div>
        }
        return ''
      })}
    </div>
  )
}

export default Persons