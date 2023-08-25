import React from 'react'
import Nav from '../components/Nav'
import Second_header from '../components/Second_header'
import First_header from '../components/First_header'
import Second_footer from '../components/Second_footer'
export default function Advice() {
    return (
        <div>
            <First_header />
            <Second_header />
            <Nav />
            <div className='advice'>

                <h1>School Fees, Rules, and Guidelines</h1>

                <h2>School Fees Structure</h2>
                <ul>
                    <li><strong>Fee Payment and Timeliness:</strong> <br />
                     Pay school tuition fee every quarter by the 10th of the month. Late payment incurs a Rs. 50/- per month fine. If the 10th falls on a Sunday or public holiday, the payment should be made on the next working day.</li><br />

                    <li><strong>No Reduction for Holidays:</strong><br /> No fee reduction for holidays. Pay full fee as long as registered.</li><br />

                    <li><strong>Overdue Fees and Consequences:</strong><br /> Students with overdue fees might miss exams or be removed from rolls if dues aren't cleared within a quarter. Re-admission needs arrears and fresh admission fee. Clear dues before terminal exams.</li><br />
                    <li><strong>Computer Education Fee:</strong><br /> Pay separate computer education fee for the session, plus an annual Rs. 5000/- fee.</li><br />
                    <li><strong>Conveyance Fee:</strong><br /> Pay additional fee if using school transport. Discontinuation needs one month's notice or fee in lieu. Students need a conveyance/bus card, and parents must pick/drop at bus stops.</li><br />
                </ul>

                <h2>Behavior and Conduct</h2>
                <ul>
                    <li><strong>Behavior and Conduct:</strong><br /> Students are expected to maintain appropriate behavior when traveling to and from school. Instances of misconduct will be noted and addressed by the school authorities.</li><br />
                    <li><strong>Attendance and Communication:</strong> <br />Parents are required to send a written explanation signed by them for any student absences. This information should be directed to the Principal. Progress reports will be regularly provided to parents to keep them informed about their child's academic performance. Students will be evaluated according to the guidelines and norms established by the C.B.S.E.</li><br />
                    <li><strong>Uniform and Language Usage:</strong><br /> Students are expected to wear the prescribed school uniform at all times. The medium of communication within the school premises is English. Students are required to use English when communicating with teachers and peers.</li><br />
                </ul>

                <h2>Cooperation and Responsibility</h2>
                <ul>
                    <li><strong>Cooperation and Responsibility:</strong><br /> Parents are requested to collaborate with the school authorities to ensure regularity, punctuality, cleanliness, and discipline among students.</li><br />
                    <li><strong>Damage and Accountability:</strong><br /> Students are accountable for any damage caused to school property and are required to cover the costs of repair or replacement. Parents or guardians are encouraged to review and sign the student's homework diary daily.</li><br />
                    <li><strong>Visitation and Departure:</strong><br /> Visitors, including parents and guardians, must obtain written permission from the Principal before visiting classes or engaging with teachers or students during class hours. Students are not permitted to leave the school premises during recess or school hours.</li><br />
                    <li><strong>Guardian Responsibility:</strong><br /> Parents or guardians are expected to ensure that their child arrives on time for school and is picked up promptly after school hours. The school's motto, "Thorough," reflects its commitment to quality education. The management welcomes suggestions from guardians that can benefit both students and the institution.</li><br />
                </ul>

                <h2>Prohibited Items</h2>
                <ul>
                    <li><strong>Prohibited Items:</strong><br /> Students are prohibited from bringing motorcycles, cars, mobile devices, iPods, intoxicants, or drugs onto the school premises.</li><br />
                </ul>
            </div>
            <Second_footer />

        </div>
    )
}
