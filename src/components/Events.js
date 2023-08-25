import React from 'react'
import First_header from '../components/First_header';
import Second_header from '../components/Second_header';
import Nav from '../components/Nav';
import Second_footer from '../components/Second_footer';
import events21 from '../image/events/e21.jpg'
import events22 from '../image/events/e22.jpg'
import events23 from '../image/events/e23.jpg'
import events24 from '../image/events/e24.jpg'
import events25 from '../image/events/e25.jpg'
import events26 from '../image/events/e26.jpg'
import events27 from '../image/events/e27.jpg'
import events28 from '../image/events/e28.jpg'
import events29 from '../image/events/e29.jpg'
import events30 from '../image/events/e30.jpg'
// import events22 from '../image/events/e22.jpg'
export default function Events() {
    return (
        <div>
            <First_header />
            <Second_header />
            <Nav />
            <div class="events">
        <img src="image/events/278329523_501651644793192_8762984407399332026_n.jpg" alt=""/>
        <img src="image/events/events1.jpg" alt=""/>
        <img src="image/events/events2.jpg" alt=""/>
        <img src="image/events/events3.jpg" alt=""/>
        <img src="image/events/events4.jpg" alt=""/>
        <img src="image/events/events6.jpg" alt=""/>
        <img src="image/events/e7.jpg" alt=""/>
        <img src="image/events/e8.jpg" alt=""/>
        <img src="image/events/e9.jpg" alt=""/>
        <img src="image/events/e10.jpg" alt=""/>
        <img src="image/events/e11.jpg" alt=""/>
        <img src="image/events/e12.jpg" alt=""/>
        <img src="image/events/e13.jpg" alt=""/>
        <img src="image/events/e14.jpg" alt=""/>
        <img src="image/events/e15.jpg" alt=""/>
        <img src="image/events/e16.jpg" alt=""/>
        <img src="image/events/e17.jpg" alt=""/>
        <img src="image/events/e18.jpg" alt=""/>
        <img src="image/events/e20.jpg" alt=""/>
        <img src={events21} alt=""/> 
        <img src={events22} alt=""/> 
        <img src={events23} alt=""/> 
        <img src={events24} alt=""/> 
        <img src={events25} alt=""/> 
        <img src={events26} alt=""/> 
        <img src={events27} alt=""/> 
        <img src={events28} alt=""/> 
        <img src={events29} alt=""/> 
        <img src={events30} alt=""/> 
    </div>
            <Second_footer />

        </div>
    )
}
