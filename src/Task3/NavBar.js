import React from 'react'
import "./NavBar.css"

function NavBar() {
  return (
    <div  className='section'>
        <div>
            <h2>Add Section </h2>
            <h5>Section Header</h5>
            <input/>
        </div>
        <div className='wrapper'>
            <h5>Section Details</h5>
            <input/>
        </div>
        <div className='abc'>
            <button>Add</button>
        </div>

    </div>
  )
}

export default NavBar
