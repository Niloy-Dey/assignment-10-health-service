import React from 'react';
import { Container } from 'react-bootstrap';
import './About.css'

import niloy from '../../assets/images/niloy.jpg'
// Code for about section
const About = () => {


    return (
        <div className="about">
            <Container>
                <div className="py-5 ">
                    <img className='profile' src={niloy} alt="" />

                    <div>
                        <h1>Niloy Dey</h1>
                        <h3>Bsc hon's in CSE</h3>
                        <h3>BGC TRUST UNIVERSITY</h3>
                        <h4><b>Mission:</b> My mission is to become a skilled web developer </h4>
                        <h4><b>Vision:</b> My dream is to work at Google as a skilled web developer</h4>
                    </div>
                   <hr />
                    <div className='mt-5'>
                        <h5>I am a youtube and content creator </h5>
                        <p><b>i maked  the web development tutorial and computer science related subject tutorial</b></p>
                        <h5><b>Channel link: </b>  https://www.youtube.com/channel/UC17QGs6BqNRgf-VsM3lEhXw  </h5>
                    </div>
                </div>

            </Container>
        </div>
    );
};

export default About;