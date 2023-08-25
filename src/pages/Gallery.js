import React from 'react'
import First_header from '../components/First_header';
import Second_header from '../components/Second_header';
import Nav from '../components/Nav';
import Second_footer from '../components/Second_footer';
export default function Gallery() {
    
    return (
        
        <div>
            <First_header />
            <Second_header />
            <Nav />
            
            <div class="gallery">
                <img src="image/general/g1.jpg" alt="" />
                <img src="image/general/g2.jpg" alt="" />
                <img src="image/general/g3.jpg" alt="" />
                <img src="image/general/g4.jpg" alt="" />
                <img src="image/general/g5.jpg" alt="" />
                <img src="image/general/g6.jpg" alt="" />
                <img src="image/general/g7.jpg" alt="" />
                <img src="image/general/g8.jpg" alt="" />
                <img src="image/general/g9.jpg" alt="" />
                <img src="image/general/g10.jpg" alt="" />
                <img src="image/general/g11.jpg" alt="" />
                <img src="image/general/g12.jpg" alt="" />
            </div>
            <Second_footer />

        </div>
    )
}
