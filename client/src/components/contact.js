import mail from '../assets/icons/mail.svg'
import linked from '../assets/icons/linkedin.svg'
import git from '../assets/icons/github.svg'
import './contact.scss';
import { Route, Link } from 'react-router-dom'
import React from 'react';

function Contact () {
    
    return (
        <section className="contact" id="contact">
            <h1 className='contact__title'>Contact Me</h1>
            <h2 className='contact__info'></h2>
            <div className='contact__table'>

                <div className='contact__table--social'>
                    <h3 className='contact__table--social--name'>Email</h3>
                    <a href={"mailto:name@domain"}>
                    <img src={mail} className='contact__table--social--icon' />
                    </a>
                </div>
                <p className='email'>samwest0230@gmail.com</p>
                
                <div className='contact__table--social'>
                <h3 className='contact__table--social--name'>LinkedIn</h3>
                <a href={"https://www.linkedin.com/in/sam-west-0230/"} >
                <img src={linked} className='contact__table--social--icon' />
                </a>
                </div>

                <div className='contact__table--social'>
                <h3 className='contact__table--social--name'>GitHub</h3>
                <a href={"https://github.com/SamWest0230"}>
                <img src={git} className='contact__table--social--icon' />
                </a>
                </div>

            </div>

           
        </section>
        );
    }
export default Contact;