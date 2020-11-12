import React from 'react';
import '../logo.svg';
import '../index.css';

class Header extends React.Component{
   render(){
     return(
       <header id="main-header">
          <img src="../logo.svg" />
          <h1>Reddit Me</h1>
       </header>
     )
   }
}

export default Header;
