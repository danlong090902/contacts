import React from 'react'

const Filter = ({ filterName, filerChangeHandle }) => {
  return (
    <div>
      <input value={filterName} onChange={filerChangeHandle} />
    </div>
  )
}

export default Filter