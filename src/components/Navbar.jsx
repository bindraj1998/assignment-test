import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (

    
    <div style={{width:"30%",marginBottom:"-30px",margin:"auto",justifyContent:"space-between",justifyItems:"center",display:"flex"}}>
<div><Link to="/">Home page</Link></div>
   <div><Link to="/shope">Shop page</Link></div>
<div><Link to="/addtocart">Add to card</Link></div>
  
    </div>
  )
}

export default Navbar