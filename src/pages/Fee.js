import React from 'react'
import Nav from '../components/Nav'
import Second_header from '../components/Second_header'
import First_header from '../components/First_header'
import Second_footer from '../components/Second_footer'
import { Link } from 'react-router-dom'

export default function Fee() {
    const mystyle = {
        color: "#8B042D",
        fontWeight: "600",
        // backgroundColor:"white"
        // textAlign:"center"
      }
    return (
        <div>
            <First_header />
            <Second_header />
            <Nav />
            <div className='school-fee-heading'>
                SCHOOL FEE
            </div>
            <div className='school-fee-rate'>
                <h2>Tuition and Fees</h2>

                <table>
                    <tr>
                        <th>Grade</th>
                        <th>Tuition Fee (p.m.)</th>
                        <th>Computer & IT Fee (p.m.)</th>
                        <th>Annual Fee</th>
                        <th>Maintenance Fee (Annually)</th>
                    </tr>
                    <tr>
                        <td>NUR-UKG</td>
                        <td>2050</td>
                        <td>–</td>
                        <td>5500</td>
                        <td>600</td>
                    </tr>
                    <tr>
                        <td>I-III</td>
                        <td>2200</td>
                        <td>250</td>
                        <td>5500</td>
                        <td>600</td>
                    </tr>
                    <tr>
                        <td>IV-V</td>
                        <td>2400</td>
                        <td>250</td>
                        <td>5500</td>
                        <td>600</td>
                    </tr>
                    <tr>
                        <td>VI-VIII</td>
                        <td>2600</td>
                        <td>250</td>
                        <td>5500</td>
                        <td>600</td>
                    </tr>
                    <tr>
                        <td>IX-X</td>
                        <td>2900</td>
                        <td>250</td>
                        <td>5000</td>
                        <td>600</td>
                    </tr>
                    <tr>
                        <td>XI-XII (Science)</td>
                        <td>4000</td>
                        <td></td>
                        <td>5500</td>
                        <td>600</td>
                    </tr>
                    <tr>
                        <td>XI-XII (Comm. & Humanities)</td>
                        <td>3800</td>
                        <td></td>
                        <td>5500</td>
                        <td>600</td>
                    </tr>
                </table>
            </div>
            <div style={{textAlign:"center", marginBottom:"1rem"}}>
            <button className='btn1'><Link className='list ' to="/payment" style={mystyle}>PAYMENT</Link></button>
            </div>
            <Second_footer />

        </div>
    )
}
