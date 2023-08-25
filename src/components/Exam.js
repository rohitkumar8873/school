import React from 'react'
import Nav from '../components/Nav'
import Second_header from '../components/Second_header'
import First_header from '../components/First_header'
import Second_footer from '../components/Second_footer'
export default function Exam() {
    return (
        <div>
          <First_header />
            <Second_header />
            <Nav />
            <div className='advice'>

                <h1>Students Examination Rules and Regulations</h1>

                <h2>Timing</h2>
                <ul>
                    <li>The students are required to be present outside the examination hall exactly 15 minutes before the start of the examination. Students will only be allowed to enter the examination hall 10 minutes prior to commencing the examination.</li>
                    <li>Students will not be allowed to appear in the examination if they reach the examination centre after 15 minutes from the start of minor examinations and 30 minutes from the start of major examinations.</li>
                    <li>No student is allowed to leave the hall before half time (Major Examinations) and 30 minutes (minor examinations) after the start of the examination.</li>
                    <li>Students are not permitted to leave the examination hall during the last 10 minutes (Major Examinations).</li>
                </ul>

                <h2>Identity Check-up</h2>
                <ul>
                    <li>Students will not be allowed into the examination hall without presenting an appropriate photo identity card, issued by the Institute.</li>
                    <li>Invigilators are responsible to ensure full compliance with such requirement.</li>
                    <li>If a student forgets his/her Institute Identity Card, the driving license/ other photo identity card will be accepted in place subject to verification by the concerned teacher/ examination coordinator/ HEAD OF DEPARTMENT concerned.</li>
                </ul>

                <h2>Breaks</h2>
                <ul>
                    <li>Breaks for visits to the bathroom may be taken only after permission from the invigilator and under the condition that the invigilator’s instructions given on the particular occasion are followed. The Departmental Examination Coordinator stipulates which bathroom shall be used.</li>
                    <li>If a student falls ill during the examination and is unable to complete the examination, the concerned student should alert the invigilator and suitable arrangements for proper medical attention may be made.</li>
                    <li>No student shall re-enter the examination hall after leaving it unless he/she was under approved supervision during the full period of absence.</li>
                </ul>

                <h2>Question Papers</h2>
                <ul>
                    <li>The invigilator distributes question paper & answer sheets among students. No other paper than that shall be used. An examination written on other paper will be considered invalid.</li>
                    <li>Students are not allowed to read the question paper until granted permission by the invigilator.</li>
                    <li>During an ongoing examination, students are not allowed to take the examination paper outside the examination hall. After the examination, the student should personally submit his/her examination answer sheet to the invigilator.</li>
                    <li>Even a blank answer sheet shall be handed-in to the invigilator.</li>
                    <li>Each answer sheet should contain details of the student’s name, section, and ID number.</li>
                </ul>

                <h2>Other Materials</h2>
                <ul>
                    <li>Students should bring their own pencils, pens, erasers, rulers, calculators, and any other tools required for the examination.</li>
                    <li>The invigilator will decide where the student’s handbags, cases, outdoor clothes, GSM, etc shall be placed.</li>
                    <li>Students are responsible for the safekeeping of all personal belongings they bring to the examination hall. The Institute takes no responsibility for the loss or damage of such belongings.</li>
                    <li>Pencil cases, mobile phones (GSM), dictionaries, electronic dictionaries, written or electronic media, electronic devices, or any other materials are not permitted/allowed into the examination hall, with the exception of devices used for assisting students with hearing, visual, or other physical difficulties.</li>
                    <li>Exchange of pens, pencils, calculators, study material, etc. is not permitted.</li>
                    <li>Calculators with more than one-line display or with alphanumeric display (programmable calculators) are not permitted into the examination hall unless specified in advance by the examiner. If the invigilator reasonably believes that a student is using a calculator that does not conform to the rules, he/she has the discretion to replace the calculator and a report on the matter will be made on the invigilator’s declaration form.</li>
                    <li>The students are not allowed to bring any eatable item inside the examination hall.</li>
                </ul>

                <h2>Disturbance</h2>
                <ul>
                    <li>During the examination period, there must be no communications among students or between a student and an outsider via any means, such as phones. This rule applies to students in the examination hall and those on supervised breaks for visits to the bathroom/s.</li>
                    <li>No student shall leave his/her assigned seat without the permission of the invigilator.</li>
                    <li>It is the invigilator’s discretion to decide whether there is enough reason to remove a student from the examination hall owing to disorderly conduct.</li>
                </ul>

                <h2>Miscellaneous</h2>
                <ul>
                    <li>The students must ensure before they leave the examination hall that they have signed the attendance sheet.</li>
                    <li>The Students (PWD/other medical problems) will be provided Writer in the Examinations only subject to prior permission from the Principle. The documentary proof along with recommendations of concerned Class Teacher will be required. All such cases will be dealt as per academic rules.</li>
                </ul>
            </div>
            <Second_footer />

        </div>
    )
}
