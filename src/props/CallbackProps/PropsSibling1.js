import React from 'react'

function PropsSibling1({parentStore}) {

  const name="swapnil"
  parentStore(name)
  return (
    <div>PropsSibling1</div>
  )
}

export default PropsSibling1