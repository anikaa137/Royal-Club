import React from 'react';
import logo from '../../images/logo.png';
import './Header.css'
const Header = () => {
    return (
      
        <div className="header">
          <div className="logo">
              <img src={logo} alt="" /> 
          </div>
       

            <nav class="navbar navbar-expand-lg sticky-sm-top">
  <div class="container-fluid ">
    <button class="navbar-toggler navbar-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav navbar">
        <a class="nav-link active" aria-current="page" href="/Home">Home</a>
        <a class="nav-link active" href="/Players">Players</a>
        <a class="nav-link active" href="/Matches">Matches</a>
        <a class="nav-link active" href= "/Teams"  > Teams</a>
        <a class="nav-link active" href= "/Statistics"  > Statistics</a>
        <a class="nav-link active" href= "/Series"  > Series</a>
       
      </div>
    </div>
  </div>
</nav>
        </div>
 
    );
 };

export default Header;