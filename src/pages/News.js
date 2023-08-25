import React from 'react'
import First_header from '../components/First_header';
import Second_header from '../components/Second_header';
import Nav from '../components/Nav';
import Second_footer from '../components/Second_footer';
export default function News() {
    return (
        <div>
            <First_header />
            <Second_header />
            <Nav />
            <div class="news">
                <img src="image/news/news1.jpg" alt="" />
                <img src="image/news/n2.jpg" alt="" />
                <img src="image/news/n3.jpg" alt="" />
                <img src="image/news/n4.jpg" alt="" />
                <img src="image/news/n5.jpg" alt="" />
            </div>
            <Second_footer />

        </div>
    )
}
