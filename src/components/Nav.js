import React from 'react'
import { Link } from 'react-router-dom'
export default function Nav() {
  const mystyle = {
    color: "#8B042D",
    fontWeight: "600"
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav rohit">
              <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page" ><i className="fa-solid fa-house"></i> Home</Link>
              </li>
              <li className="nav-item">
                
                <Link to="/admission" className="nav-link" >ADDMISSION</Link>
                
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  ABOUT US
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                 
                  <li><Link to="/our_school" className="dropdown-item">Our School</Link></li>
                  <li><Link to="/journey" className="dropdown-item">An Enduring journey</Link></li>
                  <li><Link to="/vision" className="dropdown-item">Our Vision</Link></li>
                  <li><Link to="/mission" className="dropdown-item">Our Mission</Link></li>
                  <li><Link to="/campus" className="dropdown-item">Life On Campus</Link></li>
                  <li><Link to="/faculty" className="dropdown-item">The Finest Faculty</Link></li>
                  <li><Link to="/fee" className="dropdown-item">SCHOOL FEE</Link></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  FACILITY
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                
                  <li><Link className="dropdown-item" to="/hostel">HOSTEL</Link></li>
                  <li><Link className="dropdown-item" to="/sports">SPORTS</Link></li>
                  <li><Link className="dropdown-item" to="/play_school">PLAY SCHOOL</Link></li>
                  <li><Link className="dropdown-item" to="/chemistry_lab">CHEMISTRY LAB</Link></li>
                  <li><Link className="dropdown-item" to="/physics_lab">PHYSICS LAB</Link></li>
                  <li><Link className="dropdown-item" to="/computer_lab">COMPUTER LAB</Link></li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/rules'>RULES & REGULATION</Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  MORE
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><a className="dropdown-item" href="https://www.youtube.com/@cbsccentralschoolpiro3570">VIDEOS</a></li>
                  <li><Link className="dropdown-item" to="/gallery">GALLERY</Link></li>
                  <li><Link className="dropdown-item" to="/news">NEWS</Link></li>
                  <li><Link className="dropdown-item" to="/events">EVENTS</Link></li>
                  {/* <li><Link className="dropdown-item" href="blog.html">EVENTS</Link></li> */}
                </ul>
              </li>

              {/* <li><Link href="/payment"><button type="button" className="btn1">PAYMENT</button></Link></li> */}
              <li><button className='btn1'><Link className='list ' to="/payment" style={mystyle}>PAYMENT</Link></button></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
