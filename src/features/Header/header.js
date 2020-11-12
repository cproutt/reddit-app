import React from 'react';
import './header.css';

class Header extends React.Component{
   render(){
     return(
       <header id="main-header">
          <ul>
            <li><img src="../logo.svg" /></li>
            <li><h1>Reddit Me</h1></li>
          </ul>
       </header>
     )
   }
}

export default Header;
