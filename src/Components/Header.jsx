import React from 'react'
import Logo from "../utils/Netflix_Logo.png"
const Header = () => {
  return (
    <div className = "absolute">
    <img className= "w-44 bg-gradient-to-b from-black"src={Logo} alt="Netflix_Logo" />
    </div>
  )
}
export default Header
