import React from "react"
import { Link } from "react-router-dom";

const Navbar=()=>{

    return(
        <nav >
            
           <ul  >
            <li>
                <Link to='/'>Home</Link>
            </li>
            
         <li >
         
         <Link to="/Searchrecipe" >Search Recipe  </Link></li>
         
       
        <li className="items">
            
        <Link to="/Addtip" >Cooking Tips</Link></li>
       
            </ul>
            
        </nav>
    )
}
export default Navbar