import React from 'react';

const Header = () =>
  <header>
    <div className="container">
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            Navbar
            {/* <img width="120" src={ParcelLogo} alt="" /> */}
          </a>
        </div>
      </nav>
    </div>
  </header>;

export default Header;
