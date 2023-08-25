import React from 'react'
import First_header from '../components/First_header';
import Second_header from '../components/Second_header';
import Nav from '../components/Nav';
import Second_footer from '../components/Second_footer';
import { Link } from 'react-router-dom';

export default function Student_login() {
    const mystyle={
        color:"#DB4A21"
    }
    return (
        <div>
            <First_header />
            <Second_header />
            <Nav />
            <div class="bg">
                <div class="Register-img">
                    <img class="register-heading-img" src="image/logo1.png" alt="" />
                </div>
                <div id="heading" >
                    <h1>C.B.S.C. Central School</h1>

                    <p>Affiliated to C.B.S.E. DELHI UPTO +2 LEVEL DEVCHANDA ROAD</p>
                    <p>PIRO BHOJPUR 802207</p>
                </div>
                <div class="log-in">
                    <h1>PLEASE LOG IN</h1>
                    <form action="" class="white">
                        <input class="white" type="email" name="email" placeholder="email" required id="email" /> <br />
                        <input class="white" type="password" name="password" id="password" placeholder="password" /> <br />
                        <p><Link className='list' style={mystyle} to="">forget password</Link></p>
                        <input id="submit"  type="submit" value="Submit" class="submit" />
                        <p>New User? <Link className='list' style={mystyle} to="/register">register now</Link></p>
                    </form>
                </div>
            </div>
            <Second_footer />

        </div>
    )
}

