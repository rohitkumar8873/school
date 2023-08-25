import React from 'react'
import First_header from '../components/First_header';
import Second_header from '../components/Second_header';
import Nav from '../components/Nav';
import Second_footer from '../components/Second_footer';
export default function Payment() {
    return (
        <div>
            <First_header />
            <Second_header />
            <Nav />
            <div class="payment-container">
                <div class="payment-container-grid1">
                    <div class="payment-header">
                        <img src="image/logo1.png" class="logo-img payment-img" alt="" />
                        <h1>C.B.S.C. Central School</h1>
                    </div>
                    <div>
                        <h1>C.B.S.C. Central School</h1>
                        <p><strong>Note : </strong> Payment procedure for new students/parents who have not received any information related to your <strong>Admission No, Class/Section/Roll no. etc.</strong> then during making payment you can fill column only related to <strong>Amount, Email, Phone, Student Name and Father Name.</strong> </p>
                    </div>
                    <div>
                        <h1>Contact Us:</h1>
                        <p><i class="fa-solid fa-envelope"></i><a href="mailto: cbsc2000piro@gmail.com" className='list'>cbsc2000piro@gmail.com</a></p>
                        <p><i class="fa-solid fa-phone"></i> <a href="" className='list'>+91 94731 73488</a></p>
                    </div>
                    <div>
                        <h1>Terms & Conditions</h1>
                        <p class="payment-terms"><a href="https://gungunerp.com/terms-and-conditions/" target="_blank" class="payment-terms" className='list'>https://gungunerp.com/terms-and-conditions/</a></p>
                        <p>You agree to share information entered on this page with C.B.S.C. Central SCHOOL (owner of this page) and Razorpay, adhering to applicable laws.
                        </p>
                    </div>

                </div>
                <div class="payment-container-grid2">
                    <h1>Payment Details</h1>
                    <div>
                        <form className='payment-form' action="">

                            <div class="fontpassword">
                                <label for="amount">Amount* </label>
                                <input type="number" id="amount" name="amount" required />

                            </div>
                            <div>
                                <label for="email">Email </label>
                                <input type="email" id="email" name="email" />
                            </div>
                            <div>
                                <label for="phone">Phone* </label>
                                <input type="tel" id="phone" name="phone" required />
                            </div>
                            <div>
                                <label for="studentName">Student Name* </label>
                                <input type="text" id="studentName" name="studentName" required />
                            </div>
                            <div>
                                <label for="fatherName">Father Name* </label>
                                <input type="text" id="fatherName" name="fatherName" required />
                            </div>
                            <div>
                                <label for="admissionNo">Admission No </label>
                                <input type="number" id="admissionNo" name="admissionNo" />
                            </div>
                            <div>
                                <label for="class">Class </label>
                                <input type="text" id="class" name="class" />
                            </div>
                            <div>
                                <label for="section">Section </label>
                                <input type="text" id="section" name="section" />
                            </div>
                            <div>
                                <label for="rollNo">Roll No </label>
                                <input type="number" id="rollNo" name="rollNo" />
                            </div>
                            <div>
                                <label for="reasonForPayment">Reason for Payment</label>
                                <input type="text" id="reasonForPayment" name="reasonForPayment" />
                            </div>
                            <div class="submit-payment">
                                <i class="fa-brands fa-google-pay"></i>
                                <i class="fa-brands fa-amazon-pay"></i>
                                <i class="fa-brands fa-paypal"></i>
                                <button class="btn-payment">Pay ₹0.00</button>
                                {/* <button className='btn1'>Student Login</button> */}
                            </div>

                        </form>
                    </div>

                </div>
            </div>
            <Second_footer />
        </div>
    )
}
