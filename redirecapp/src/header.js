import React from 'react';
import {Link} from 'react-router-dom';
const Header=()=>{
return(<header>
    <div className="flex">
  <div class="w-10 pa2 mr2">
  <Link to='/'>Home</Link>
  </div>
  <div className="w-10 pa2 mr2">
  <Link to='/about'>About Site</Link> 
  </div>
  <div className="w-10 pa2 mr2">
  <Link to='/contact'>Contact Us</Link> 
  </div>
  <div className=" w-10 pa2 mr2">
  <Link to='/credits'>Credits</Link> 
  </div>
</div>
 </header>)

}

export default Header;