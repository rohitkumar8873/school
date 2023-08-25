import React from 'react'
import Nav from '../components/Nav'
import Second_header from '../components/Second_header'
import First_header from '../components/First_header'
import Second_footer from '../components/Second_footer'
export default function Admission() {
    
    return (
        <>
        <First_header/>
        <Second_header/>
        <Nav/>
     
            <div className="addmission">
                <h1>Required Documents for Admission</h1>
                <ul>
                    <li>Birth Certificate / Passport of the child</li>
                    <li>Residence proof of both permanent and current addresses (Ration Card/ Voter ID-Card/ Utility Bill/ Rent
                        Agreement/ Sale Deed/ Aadhaar Card)</li>
                    <li>Photo ID proof of both the parents and child (Aadhaar Card/Passport/Driving License/ Voter ID-Card)</li>
                    <li>4 Passport size latest photographs of the child and both the parents</li>
                    <li>2 Passport size latest photographs of the guardian (if applicable)</li>
                    <li>Academic transcript of the previous 2 classNamees attended by the student (for admission in grade III and
                        above)</li>
                    <li>Vaccination Card/Medical Certificate of the child</li>
                    <li>Attested copies of legal document if the child is being brought up by a single parent</li>
                    <li>Affidavit of Guardianship if the child lives with a local guardian</li>
                    <li>Original Transfer Certificate from the last school attended</li>
                    <li>Original Character Certificate from the last school attended (only for student seeking admission in
                        grade XI)</li>
                    <li>Original Migration Certificate (only for Non-CBSE student seeking admission in grade XI)</li>
                    <li>Caste Certificate- In case of SC/ST/OBC (if applicable)</li>
                    <li>Parivaar Pehchaan Patra</li>
                </ul>
            </div>
            <div className="header-form">Admission Form</div>
            <div className="admission-form">
                <div className="student-profiles">
                    <h3>Student Profile Details:</h3>
                    <div className="profile-container">
                        <div className="students-fill">
                            <label for="first-name">First Name *</label>
                            <input type="text" placeholder="First Name" required />
                        </div>
                        <div className="students-fill">
                            <label for="last-name">Last Name *</label>
                            <input type="text" placeholder="Last Name" required />
                        </div>
                        <div className="students-fill">
                            <label for="middle-name">Middle Name </label><br />
                            <input type="text" placeholder="Middle Name" required />
                        </div>
                        <div className="students-fill">
                            <label for="date-of-birth">Date of Birth</label><br />
                            <input type="date" placeholder="" required />
                        </div>
                        <div className="students-fill">
                            <label for="gender">Gender *</label><br />
                            <select name="gender" id="gender">
                                <option className="text-muted" value="" disabled selected> --Select Gender-- </option>
                                <option value="males">Male</option>
                                <option value="female">Female</option>
                                <option value="other">other</option>
                            </select>
                        </div>
                        <div className="students-fill">
                            <label for="gender">Blood Group</label><br />
                            <select name="blood-groups" id="blood-groups">
                                <option className="text-muted" value="" disabled selected> --Blood Group-- </option>
                                <option value="A">A</option>
                                <option value="B">B</option>
                                <option value="AB">AB</option>
                                <option value="O">O</option>
                            </select>
                        </div>
                    </div>

                </div>
            </div>
            <div className="admission-form">
                <div className="student-profiles">
                    <h3>Student Parents Details:</h3>
                    <div className="profile-container">
                        <div className="students-fill">
                            <label for="father-name">Father Name *</label><br />
                            <input type="text" placeholder="Father Name" required />
                        </div>
                        <div className="students-fill">
                            <label for="fahther-qualification">Father's Qualification</label><br />
                            <input type="text" placeholder="Father Qualification" required />
                        </div>
                        <div className="students-fill">
                            <label for="father-occupation">Father's Occupation</label><br />
                            <input type="text" placeholder="Father Occupation" required />
                        </div>
                        <div className="students-fill">
                            <label for="residential-address">Residential Address</label><br />
                            <input type="text" placeholder="Address" required />
                        </div>
                        <div className="students-fill">
                            <label for="mother-name">Mother Name *</label><br />
                            <input type="text" placeholder="Mother Name" required />
                        </div>
                        <div className="students-fill">
                            <label for="mother-qualification">Mother's Qualification</label><br />
                            <input type="text" placeholder="Mother Qualification" required />
                        </div>
                        <div className="students-fill">
                            <label for="mother-occupation">Mother's Occupation</label><br />
                            <input type="text" placeholder="Mother Occupation" required />
                        </div>
                        <div className="students-fill">
                            <label for="family-income">Family Income</label><br />
                            <input type="text" placeholder="Family Income" required />
                        </div>
                    </div>
                </div>
            </div>
            <div className="admission-form">
                <div className="student-profiles">
                    <h3>Student Other Details:</h3>
                    <div className="profile-container">
                        <div className="students-fill">
                            <label for="nationality">Nationality *</label><br />
                            <input type="text" placeholder="Nationality" required />
                        </div>
                        <div className="students-fill">
                            <label for="religion">Religion</label><br />
                            <input type="text" placeholder="Religion" />
                        </div>
                        <div className="students-fill">
                            <label for="mother-tongue">Mother Tongue</label><br />
                            <input type="text" placeholder="Mother Tongue" />
                        </div>
                        <div className="students-fill">
                            <label for="adhar-card">Aadhar Card No</label><br />
                            <input type="number" placeholder="Aadhar Card No" required />
                        </div>
                        <div className="students-fill">
                            <label for="caste">Caste</label><br />
                            <input type="text" placeholder="Caste" required />
                        </div>

                    </div>
                </div>
            </div>
            <div className="admission-form">
                <div className="student-profiles">
                    <h3>Student Photo:</h3>
                    <div className="profile-container">
                        <div className="students-fill">
                            <label for="file">Upload Student Photo</label><br />
                            <input type="file" className="upload-photo" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="admission-form">
                <div className="student-profiles">
                    <h3>Student Contact Details:</h3>
                    <div className="profile-container">
                        <div className="students-fill">
                            <label for="contact-no-1">Contact No 1 *</label><br />
                            <input type="tel" placeholder="Contact" required />
                        </div>
                        <div className="students-fill">
                            <label for="contact-no-1">Contact No 2</label><br />
                            <input type="tel" placeholder="Contact" />
                        </div>
                        <div className="students-fill">
                            <label for="email">Email Id: </label><br />
                            <input type="email" placeholder="Email" />
                        </div>
                        <div className="students-fill">
                            <label for="permanent-address">Permanent Address</label><br />
                            <input type="text" placeholder="Address" required />
                        </div>

                    </div>
                </div>
            </div>

            <div className="admission-form">
                <div className="student-profiles">
                    <h3>Student Admission Details:</h3>
                    <div className="profile-container">
                        <div className="students-fill">
                            <label for="nationality">className to which admission is Sought:</label><br />
                            <select name="admission-className" id="admission-className">
                                <option className="text-muted" value="" disabled selected> --Select className-- </option>
                                <option value="nursery">Nursery</option>
                                <option value="lkg">LKG</option>
                                <option value="ukg">UKG</option>
                                <option value="className-I">className I</option>
                                <option value="className-II">className II</option>
                                <option value="className-III">className III</option>
                                <option value="className-IV">className IV</option>
                                <option value="className-V">className V</option>
                                <option value="className-VI">className VI</option>
                                <option value="className-VII">className VII</option>
                                <option value="className-VIII">className VIII</option>
                                <option value="className-XI">className XI</option>
                                <option value="className-X">className X</option>
                                <option value="className-XI">className XI</option>
                                <option value="className-XII">className XII</option>
                            </select>
                        </div>
                        <div className="students-fill">
                            <label for="medium">Medium</label><br />
                            <input type="text" placeholder="Medium" required />
                        </div>
                        <div className="students-fill">
                            <label for="school-last">School last attened </label><br />
                            <input type="text" placeholder="previous School Name" required />
                        </div>
                        <div className="students-fill">
                            <label for="prev-className">Previous className Average Grade</label><br />
                            <input type="text" placeholder="Previous className Average Grade" required />
                        </div>
                    </div>
                </div>
            </div>
            <Second_footer/>
        </>
    )
}
