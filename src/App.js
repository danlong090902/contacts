import React, { useState, useEffect } from 'react'
import personsServices from './services/persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
const App = () => {
  const [persons, setPersons] = useState([
    // { name: 'Arto Hellas', number: '040-123456' },
    // { name: 'Ada Lovelace', number: '39-44-5323523' },
    // { name: 'Dan Abramov', number: '12-43-234345' },
    // { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterName, setFilterName] = useState('')

  useEffect(() => {
    personsServices.getAll().then(response => {
      setPersons(response.data)
    })
  }, [])


  const nameChangeHandle = (e) => {
    setNewName(e.target.value)
  }

  const numberChangeHandle = (e) => {
    setNewNumber(e.target.value)
  }

  const addSubmitHandle = event => {
    event.preventDefault();
    const isReapt = persons.some((element, index, array) => {
      return element.name === newName
    })
    if (isReapt) {
      alert(`${newName} is already add to phonebook`)
    } else {
      const newPerson = {
        name: newName,
        number: newNumber
      }
      personsServices.create(newPerson)
        .then(res => {
          setPersons(persons.concat(res.data))
        })
    }

    setNewName('')
    setNewNumber('')
  }
  const filerChangeHandle = (e) => {
    setFilterName(e.target.value)
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filterName={filterName} filerChangeHandle={filerChangeHandle} />
      <h2>add a new</h2>
      <PersonForm
        addSubmitHandle={addSubmitHandle}
        newName={newName}
        newNumber={newNumber}
        nameChangeHandle={nameChangeHandle}
        numberChangeHandle={numberChangeHandle}
      />
      <h2>Numbers</h2>
      <Persons filterName={filterName} persons={persons} />
    </div>
  )
}


export default App