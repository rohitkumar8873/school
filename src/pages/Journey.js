import React from 'react'
import Nav from '../components/Nav'
import Second_header from '../components/Second_header'
import First_header from '../components/First_header'
import Second_footer from '../components/Second_footer'
import image from '../image/slider/s1.jpg'

export default function Journey() {
    return (
        <div>
            <First_header />
            <Second_header />

            <Nav />
            <div className='our-school'>
                <div className='our-school-container'>
                <h1>Our Journey</h1>

                    In the year 2000, a visionary named Mr. Santosh Singh embarked upon a mission that was not just ambitious, but profoundly impactful: to bestow the gift of quality education upon a multitude of children. Though the concept was elegantly simple in its essence, the execution proved to be a formidable challenge. With an unwavering commitment to this noble cause, he initiated the establishment of CBSC Central School, a bastion of education and enlightenment, within the confines of his own residence located at the East of Piro Thana, DEVCHANDA BARAON ROAD, PIRO (BHOJPUR) 802207.
                    <br /> <br />
                    Inspired by the virtues of knowledge dissemination and holistic development, the school's impact transcended the boundaries of academia, resonating across a spectrum of disciplines that encompassed not only education, but also sociology, critical theory, and literary studies. True to its namesake, CBSC Central School stood as an embodiment of its founder's aspirations, aiming not merely to impart knowledge but to cultivate students into well-rounded individuals poised to navigate the challenges of a rapidly evolving world, equipped with the skills to contribute productively and creatively to society.
                    <br /> <br />
                    A significant milestone in this journey was attained in the year 2010 when the State Government bestowed its official certification upon the school, validating its mission and reaffirming its commitment to education excellence. As the years progressed, the school's trajectory of growth and distinction gained further momentum, culminating in the pivotal year 2022 when the coveted affiliation from the Central Board of Secondary Education (CBSE) was granted, extending the school's recognition and influence up to the illustrious Class 12 level. This achievement marked a testament not only to the dedication of the school's stakeholders but also to the enduring legacy of Mr. Santosh Singh's vision.
                    <br /><br />
                    In its nascent stages, the school's attendance comprised a humble cohort of 15-20 children from the immediate neighborhood, a small yet earnest beginning that paved the way for its eventual evolution. Fueled by the relentless commitment of its founders and guided by the able stewardship of individuals like Mr. Santosh Singh, Mrs. Usha Devi, and Mr. Vijay Kumar Yadav, the institution rapidly earned a reputation for delivering exceptional education, fostering a nurturing environment conducive to growth, and nurturing academic excellence.
                    <br /><br />
                    This commitment to excellence translated into a remarkable surge in enrollment, as word of the school's educational prowess spread. The growth was nothing short of astonishing, necessitating the development of a new edifice tailored to cater to the educational needs of the senior students, a testament to the school's dynamic response to evolving demands and its unyielding dedication to the holistic development of its pupils.
                    <br /><br />
                    Today, the once modest institution has blossomed into a thriving hub of education, with thousands of students gracing its halls and corridors, imbibing knowledge, honing skills, and embracing values that transcend borders and backgrounds. The impact of CBSC Central School is not confined to its physical boundaries; its graduates, a testament to the institution's transformative power, have ventured into diverse spheres, both within India and on the global stage, contributing meaningfully to various fields and forging a legacy that extends far beyond the boundaries of Piro Town.
                    <br /><br />
                    In summary, the story of CBSC Central School is one of vision, perseverance, and unwavering commitment to the holistic development and education of its students. What started as a simple yet audacious dream of Mr. Santosh Singh in 2000 has evolved into a beacon of educational excellence that continues to shape the lives of countless individuals, imparting not just knowledge, but also the values and skills necessary to thrive in an ever-changing world.
                </div>
                <div className="our-school-img">
                    <img src={image} alt="" />
                </div>
            </div>

            <Second_footer />

        </div>
    )
}
