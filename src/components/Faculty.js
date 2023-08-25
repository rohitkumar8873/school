import React from 'react'
import Nav from '../components/Nav'
import Second_header from '../components/Second_header'
import First_header from '../components/First_header'
import Second_footer from '../components/Second_footer'
// import image1 from '../image/faculty/1.jpg'
import image2 from '../image/faculty/2.jpg'
export default function Faculty() {
    return (
        <div>
            <First_header />
            <Second_header />

            <Nav />
            <div className='our-school'>
                <div className='our-school-container'>
                    <h1>Our Best Faculty</h1>
                    <p>
                        The CBSC Family is proud to house one of the best faculty team for schooling & pre-foundation program not only in Piro but in the entire block. CBSC faculty team is an unmatched intellectual pool of school teachers, who have outstanding combination of proven record, experience, qualification & intellect that is needed to excel in school education in an holistic manner.
                        <br /><br />
                        With an aim to revolutionize the conventional education systems, we proud to host the best faculty team which is drawn from the most reputed and eminent universities with strong subject knowledge and experience.
                        <br /><br />
                        We take proud in the fact that all our lead faculty members are some of the most senior faculty members at some of the largest schools in Bhojpur. They have consistently produced top-class results with numerous merits in various state boards over last 5 years.
                        <br /><br />
                        At CBSC Central School Piro, educators are dedicated towards student growth and success.
                        <br /><br />
                        Furthermore, the multidirectional efforts by members of our faculty team to create an optimal environment where students strive for excellent performance in board exam along with adequate focus on other forms of studies is unparalleled in history.
                        <br /><br />
                        The devotion combined with a determination to teach productively helps our students to absorb concepts and build a strong foundation that is provenly great for excellent learning.
                        <br /><br />
                        Our faculty team takes inputs from the belief that the role of a teacher is not simply to impart knowledge but to help the students seek more learning. A perfect blend of intellect, subject knowledge, experience and the art to teach the most complex subjects in a very clear and understanding way makes the faculty of CBSC, the best team under one roof. All the members of the faculty team at MHS are completely oriented for their students' success. Our faculty is committed to provide their best support inside and outside classrooms.
                    </p>

                </div>
                <div className="our-school-img">
                    {/* <img src={image1} alt="" /> */}
                    <img src={image2} alt="" />
                </div>
            </div>

            <Second_footer />

        </div>
    )
}
