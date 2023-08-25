import React from 'react'
import { Link } from 'react-router-dom'

export default function Scroll() {
    return (
        <div>
            <div className='scroll'>
                <marquee behavior="" onouseOver="this.stop()" onouseOut="this.start()" direction="">
                    <ul>
                        <li > <Link to="/admission" className="list marqueecolor" >Admission</Link></li>
                        <li><Link className="list marqueecolor" to="/our_school" >Our School</Link></li>
                        <li><Link className="list marqueecolor" to="/journey" >An Enduring journey</Link></li>
                        <li><Link className="list marqueecolor" to="/vision" >Our Vision</Link></li>
                        <li><Link className="list marqueecolor" to="/mission" >Our Mission</Link></li>
                        <li><Link className="list marqueecolor" to="/campus" >Life On Campus</Link></li>
                        <li><Link className="list marqueecolor" to="/faculty" >The Finest Faculty</Link></li>
                        <li><Link className="list marqueecolor" to="/fee" >School Fee</Link></li>
                        <li><Link className="list marqueecolor" to="/hostel">Hostel</Link></li>
                        <li><Link className="list marqueecolor" to="/sports">Sports</Link></li>
                        <li><Link className="list marqueecolor" to="/play_school">Play School</Link></li>
                        <li><Link className="list marqueecolor" to="/chemistry_lab">Chemistry Lab</Link></li>
                        <li><Link className="list marqueecolor" to="/physics_lab">Physics Lab</Link></li>
                        <li><Link className="list marqueecolor" to="/computer_lab">Computer Lab</Link></li>
                        <li>
                            <Link className="list marqueecolor" to='/rules'>Rules & Regulation</Link>
                        </li>
                        <li><a className="list marqueecolor" href="https://www.youtube.com/@cbsccentralschoolpiro3570">Videos</a></li>
                        <li><Link className="list marqueecolor" to="/gallery">Gallery</Link></li>
                        <li><Link className="list marqueecolor" to="/news">Media News</Link></li>
                        <li><Link className="list marqueecolor" to="/events">Events</Link></li>

                    </ul>
                </marquee>


            </div>
        </div>
    )
}
