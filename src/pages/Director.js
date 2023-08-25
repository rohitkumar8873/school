import React from 'react'
import Nav from '../components/Nav'
import Second_header from '../components/Second_header'
import First_header from '../components/First_header'
import Second_footer from '../components/Second_footer'
import image1 from '../image/director.jpg'
export default function Director() {
    return (
        <div>
            <First_header />
            <Second_header />
            <Nav />
            <div className="director">
                <div className="director-message">
                    <h1>Message from the Director's Desk</h1>

                    <p>
                        Dear Parents/Guardians,
                        <br /><br />
                        I am delighted to extend a warm and heartfelt welcome to your child on behalf of the entire faculty and staff of CBSC Central School. Our school is driven by a steadfast determination to shape your child into a well-rounded global citizen, equipped with knowledge, skills, and values that will serve them throughout their lives. It is my privilege to share with you the essence of CBSC School's academic excellence, expansive campus, and nurturing atmosphere.
                        <br /><br />
                        At CBSC School, your child will have the opportunity to engage with some of the most exceptional teaching minds in the country. Our faculty, comprising award-winning educators, and our dedicated staff work tirelessly to provide the utmost quality of education and care to your child during their journey at CBSC School. Our commitment to nurturing young minds extends beyond the classroom, fostering an environment where your child's growth and development are our utmost priorities.
                        <br /><br />
                        We aspire that when the time comes for your child to graduate from CBSC School, they stand as a source of pride not only for you but also for us. This aspiration is fueled by a collective effort - the unwavering dedication of our faculty, the support of our staff, and the involvement of you, the parents. It's important to acknowledge that our shared goals can only be achieved through a partnership between the school and parents.
                        <br /><br />
                        In this context, I extend an invitation to you to join hands with us in helping your child unlock their true potential. By working together, we can create an environment that nurtures curiosity, fosters growth, and equips your child with the tools they need to succeed academically and personally. Your active participation, encouragement, and involvement will play an instrumental role in your child's journey towards realizing their aspirations.
                        <br /><br />
                        I am deeply committed to fostering a strong relationship between CBSC School and your family. The success of your child is our success, and we look forward to collaborating closely with you to provide the best possible educational experience. Together, we can create a solid foundation that will enable your child to embark on a journey of knowledge, character-building, and accomplishment.
                        <br /><br />
                        Thank you for entrusting CBSC Central School with the responsibility of shaping your child's future. We are excited about the journey ahead and are confident that, together, we can nurture your child's growth and potential in an environment of care, dedication, and excellence.
                        <br /><br />
                        With warm regards,
                        <br /><br />
                        Mr. Santosh Singh
                        <br />
                        Director
                    </p>
                </div>
                <div className="director-img">
                    <img src={image1} alt="" />
                </div>
            </div>
           
            <Second_footer />

        </div>
    )
}
