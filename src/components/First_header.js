import React from 'react'
import { Link } from 'react-router-dom'

export default function First_header() {
    const mystyle={
        color: "#8B042D",
        fontWeight: "600"
    }
  return (
    <div>
        <header>
        <div className="first">
            <ul className="list-unstyled">
                <li>Affiliation No. 331124</li>
                <li><i className="fa-solid fa-phone"></i> <a href="" className='list'>+91 94731 73488</a> </li>
            </ul>
        </div>
        <div className="second">
            <ul className="list-unstyled">
                
                <li><button className='btn1'><Link className='list ' to="/student-login" style={mystyle}>Student Login</Link></button></li>
              
                <li><a href="https://www.facebook.com/cbsccentralschoolpiro/"><i
                            className="fa-brands fa-facebook-f"></i></a></li>
                <li><a href=""><i className="fa-brands fa-twitter"></i></a></li>
                <li><a href="https://www.youtube.com/@cbsccentralschoolpiro3570"><i
                            className="fa-brands fa-youtube"></i></a></li>
            </ul>
        </div>
    </header>
    </div>
  )
}
