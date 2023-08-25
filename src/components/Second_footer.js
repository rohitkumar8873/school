import React from 'react'
import { Link } from 'react-router-dom'

export default function Second_footer() {
  return (
    <div>
      <div className="second-footer">
    <div className="second-footer-first">
        <div className="logo">
            <img className="logo-img" src="image/logo1.png" alt=""/>
        </div>
        <div className="team">
            <p>© C.B.S.C. CENTRAL SCHOOL PIRO BHOJPUR</p>
            <p>Developed by <a className='list'href="https://www.linkedin.com/in/rohit-kumar-663684250/" target="_blank">Rohit
                    kumar</a></p>
        </div>
    </div>

    <div className="link">
        <h3>EXPLORE LINK</h3>
        <div className="link-do">
            <ul>
                {/* <li><a href="index.html">HOME</a></li> */}
                <li><Link className='list' to="/">HOME</Link></li>
                <li><Link to="/admission" className='list'  >ADDIMISSION</Link></li>
                <li><Link className='list' to="/hostel">HOSTEL</Link></li>
                <li><Link className='list' to="/news">NEWS</Link></li>
                <li><Link className='list' to="/gallery">GALLERY</Link></li>
                <li><Link className='list' to="/sports">SPORTS</Link></li>
            </ul>
            <ul>
                <li><Link className='list' to="/events">EVENTS</Link></li>
                <li><a className='list' href="https://www.youtube.com/@cbsccentralschoolpiro3570">VIDEOS</a></li>
                <li><Link className='list' to="/exam">EXAM</Link></li>
                <li><a className='list' href="https://www.cbse.gov.in/">CBSE BORAD</a></li>
                <li><Link className='list' to="/payment">FEES FAYMENT</Link></li>
                <li><Link className='list' to="/fee">SCHOOL FEE</Link></li>
            </ul>
        </div>

    </div>
</div>
    </div>
  )
}
