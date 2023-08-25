import React from 'react'
import Nav from '../components/Nav'
import Second_header from '../components/Second_header'
import First_header from '../components/First_header'
import Second_footer from '../components/Second_footer'
import image from '../image/slider/s1.jpg'
export default function OurSchool() {
    return (
        <div>
            <First_header />
            <Second_header />
            <Nav />
            <div className='our-school'>
                <div className='our-school-container'>
                    <h1>Our School</h1>
                    <p>Under the distinguished leadership of our Director, Mr. Santosh Singh, Mrs. Usha Devi and Mr. Vijay Kumar Yadav whose dynamic and visionary approach has been instrumental in shaping the trajectory of CBSC Central School, Piro, the institution has risen from humble beginnings in the year 2000, initially accommodating a modest cohort of 15-20 students within the premises of founder President Shri Santosh Singh's residence situated to the east of Piro Thana on DEVCHANDA BARAON ROAD, PIRO (BHOJPUR) 802207, to its current position as an illustrious beacon of education in the heart of Piro Town. Through his unwavering commitment and effective pedagogical methodologies, Mr. Nitish Kumar, Principle of our school, guided the school on a trajectory of continuous growth, overseeing its expansion from its initial offerings up to Std. VIII in its nascent years, gradually evolving and adapting to accommodate students up to the 10+2 level over time.
                        <br />
<br />
                        Today it is a common sight to find the school campus overflowing with buds ready to bloom and spread their fragrance in all the directions to charm everyone.
                        <br />
                        <br />
                        In the year 2010, a pivotal moment was achieved as our school was granted the No Objection Certificate (NOC) by the government of Bihar, which laid the foundation for the subsequent pursuit of affiliation with the prestigious Central Board of Secondary Education (CBSE). Recognizing the need to meet CBSE's stringent standards and criteria, a comprehensive effort was undertaken to fulfill the affiliation prerequisites, culminating in the crowning achievement of CBSC Central School's affiliation with CBSE in the year 2022, extending its recognition and recognition for excellence up to the coveted Class XII level.
                        <br />
                        <br />
                        This remarkable journey of growth, excellence, and dedication would not have been possible without the collective and synergistic efforts of our esteemed Secretary, Mrs. Usha Devi, the vigilant and committed Managing Committee head, Mr. Vijay Kumar Yadav, and the cohesive teamwork of our dedicated faculty. The resolute commitment of these individuals, guided by Mr. Nitish Kumar's visionary leadership, has catapulted CBSC Central School, Piro into the echelons of the most esteemed CBSE-affiliated institutions in the Ara region. The accolades and awards bestowed upon our revered Principal stand as a testament to his indomitable spirit and unwavering determination to lead the school to the zenith of its capabilities, infusing it with prestige and recognition that resonates not only within the institution but throughout the entire community. Today, as the school's campus teems with eager students, akin to buds ready to bloom, it radiates a sense of promise and potential that captivates all who encounter it, embodying the essence of quality education and holistic development that CBSC Central School, Piro has come to symbolize.</p>
                </div>
                <div className="our-school-img">
                    <img  src={image} alt="" />
                </div>
            </div>

            <Second_footer />

        </div>
    )
}
