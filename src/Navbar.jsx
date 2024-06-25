import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img 
              src="https://uploads.mjwebs.com/BSdq0JSqeLGAM3FAX6yXynKa2SPllrfX9w3BDxLP.png" 
              style={{ height: 100, width: 200 }} 
              alt="Logo"
            />
          </a>
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNavDropdown" 
            aria-controls="navbarNavDropdown" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-between" id="navbarNavDropdown">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a href="#" class="btn active" role="button" data-bs-toggle="button">Send money</a>
              </li>
              <li className="nav-item">
                <a href="#" class="btn" role="button" data-bs-toggle="button">About</a>
              </li>
              <li className="nav-item">
                <a href="#" class="btn" role="button" data-bs-toggle="button">Features</a>
              </li>
              <li className="nav-item">
                <a href="#" class="btn" role="button" data-bs-toggle="button">Contact</a>
              </li>
            </ul>
            <ul className="navbar-nav" style={{paddingRight: 30}}>
              <li className="nav-item">
                <a className="nav-link" href="#">Login</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" style={{backgroundColor: 'Red'}}>Signup</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
