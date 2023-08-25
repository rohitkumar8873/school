import React from 'react'
import First_header from '../components/First_header';
import Second_header from '../components/Second_header';
import Nav from '../components/Nav';
import Second_footer from '../components/Second_footer';
export default function Register() {
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
                    <h1>REGISTER</h1>
                    <form action="" class="white">
                        <input class="white" type="email" name="email" placeholder="email" required id="email" /> <br />
                        <input class="white" type="password" name="password" id="password" placeholder="password" /> <br />
                        <input class="white" type="password" name="confirm-password" id="confirm-password" placeholder="confirm password" /> <br />

                        <input id="submit" type="submit" value="Register" class="submit" />

                    </form>
                </div>
            </div>
            <Second_footer />

        </div>
    )
}
