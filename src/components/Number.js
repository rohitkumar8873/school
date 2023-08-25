import React from 'react'
// import React, { useEffect, useState } from 'react';
export default function Number() {
   
  return (
    <div>
       <div class="number">
        <div class="student member">
            <p><img class="student-img" src="image/student.png" alt=""/></p>
            <p><span id="count1">3000</span>+</p>
            <p>Number of students</p>
        </div>
        <div class="teacher member">
            <p><img class="student-img" src="image/teacher.png" alt=""/></p>
            <p><span id="count2">100</span>+</p>
            <p>Number of teacher</p>
        </div>
        <div class="student member">
            <p><img class="student-img" src="image/staff.png" alt=""/></p>
            <p><span id="count3">60</span>+</p>
            <p>Number of staff</p>
        </div>
    </div>
    </div>
  )
}
