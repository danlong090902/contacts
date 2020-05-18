import React from 'react'

const PersonForm = ({ addSubmitHandle, newName, nameChangeHandle, newNumber, numberChangeHandle }) => {
  return (
    <form onSubmit={addSubmitHandle}>
      <div>
        name: <input value={newName} onChange={nameChangeHandle} />
      </div>
      <div>number: <input value={newNumber} onChange={numberChangeHandle} /></div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

export default PersonForm