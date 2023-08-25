import React from 'react';
import logo from '../image/logo1.png'

export default function Second_header() {
  return (
    <div>
          <div class="sec-header">
        <div class="sec-header-logo">
            <div class="logo"><img src={logo} alt="" class="logo-img"/></div>
            <div class="school-name">
                <h1>C.B.S.C. CENTRAL SCHOOL</h1>
                <p>AFFILAITED TO CBSE NEW DELHI UPTO (+2 LEVEL)
                </p>
                <p>DEVCHANDA BARAON ROAD, PIRO (BHOJPUR) 802207</p>
            </div>
        </div>
        <div class="sec-header-side">
            <div class="office">
                <i class="fa-regular fa-clock"></i>
                <div>
                    <h1>Office Timing</h1>
                    <p>Timing: 08:00 AM - 04:00 PM</p>
                </div>
            </div>
            <div class="message">
                <i class="fa-regular fa-envelope"></i>
                <div>
                    <h1>Send Message</h1>
                    <p><a className='list' href="mailto: cbsc2000piro@gmail.com">cbsc2000piro@gmail.com</a></p>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}
