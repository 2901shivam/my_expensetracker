import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h1>Welome to expense tracker</h1>
      your profile is complete.<NavLink to='/profile'>Complete Now</NavLink>
    </div>
  )
}

export default Home
