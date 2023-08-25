import React from 'react';
import First_header from '../components/First_header';
import Second_header from '../components/Second_header';
import Nav from '../components/Nav';
import Second_footer from '../components/Second_footer';
import hostel1 from '../image/hostel/hostel1.jpg'
import hostel2 from '../image/hostel/hostel2.jpg'
import hostel3 from '../image/hostel/hostel3.jpg'
import hostel4 from '../image/hostel/hostel4.jpg'
// import { Image } from 'react-bootstrap';
export default function Hostel() {
    return (
        <div>
            <First_header />
            <Second_header />
            <Nav />
            <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="2000">
                        <img src={hostel1} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src={hostel2} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src={hostel3} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src={hostel4} className="d-block w-100" alt="..." />
                    </div>
                   
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div class="hostel">
                <h1>HOSTEL FACILITY</h1>

                <ul>

                    <li> <h5>Accommodation</h5><br /> Hostels should provide clean, safe, and comfortable living spaces for students, with separate sections for males and females.
                    </li>
                    <li>
                        <h5>Security</h5> <br /> Safety should be a top priority. Hostels should have secure entry points, CCTV surveillance, and trained security personnel to ensure the safety of students at all times.
                    </li>
                    <li>
                        <h5>Amenities</h5><br /> Basic amenities like beds, study tables, chairs, storage, and proper lighting should be available in each room to create a conducive environment for studying and relaxation.
                    </li>
                    <li>

                        <h5>Hygiene and Cleaning</h5><br /> Regular cleaning and maintenance of hostel premises, including rooms, common areas, and bathrooms, are essential to maintain a healthy living environment.
                    </li>
                    <li>

                        <h5>Healthy Food</h5> <br /> Hostels should offer nutritious and balanced meals to support students' health. Special dietary requirements should be accommodated as needed.
                    </li>
                    <li>
                        <h5>Recreation</h5> <br /> Common areas for relaxation, socializing, and recreational activities such as indoor games, TV rooms, and outdoor spaces should be provided.
                    </li>
                    <li>
                        <h5>Internet and Connectivity</h5> <br /> Access to reliable internet connectivity is crucial for students to engage in online learning, research, and communication.
                    </li>
                    <li>
                        <h5>Laundry Facilities</h5> <br /> On-site laundry facilities or arrangements for laundry services should be available to help students manage their personal chores.
                    </li>
                    <li>

                        <h5> Medical Assistance</h5> <br /> Hostels should have a tie-up with nearby medical facilities and provide basic first aid kits to attend to minor health issues.
                    </li>
                    <li>
                        <h5>Study Support</h5> <br /> Quiet study areas, access to reference materials, and resources such as printers and scanners can support students' academic endeavors.
                    </li>
                    <li>

                        <h5>24/7 Accessibility</h5> <br /> Students should have access to the hostel premises and facilities round the clock, considering their different schedules.
                    </li>
                    <li>

                        <h5>Counseling Services</h5> <br /> Provision of counseling services for emotional and psychological support is crucial to help students manage stress and personal challenges.
                    </li>
                    <li>
                        <h5>Fire Safety</h5> <br /> Hostels should be equipped with fire alarms, extinguishers, and clear evacuation routes to ensure the safety of residents in case of emergencies.
                    </li>
                    <li>

                        <h5>Environmental Considerations</h5> <br /> Implementing eco-friendly practices like waste segregation, energy-efficient lighting, and water-saving measures can contribute to sustainability.
                    </li>
                    <li>



                        <h5>Visitor Policies</h5><br />  Clear gui <br />delines regarding visitors, including timings and procedures, should be in place to maintain security and a peaceful environment.

                    </li>
                    <li>


                        <h5>Communication Channels</h5> <br /> Effective communication channels between hostel management and students/parents should be established for quick information sharing.
                    </li>
                    <li>


                        <h5>Rules and Regulations  </h5> <br /> Clearly defined rules and expectations for behavior, noise levels, and other aspects should be communicated to ensure a harmonious living environment.
                    </li>
                    <li>


                        <h5>Transportation  </h5> <br />If the hostel is located away from the educational institution, provisions for transportation to and from the campus should be considered.
                    </li>
                    <li>



                        <h5>Emergency Response  </h5> <br /> Plans for handling emergencies such as natural disasters, medical situations, and other crises should be well-documented and communicated.
                    </li>
                </ul>
            </div>
            <Second_footer />
        </div>
    )
}
