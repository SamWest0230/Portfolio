
import me from '../assets/images/HeadshotTransParent.png'
import './about.scss';
import css from '../assets/icons/css.svg'
import html from '../assets/icons/html.svg'
import java from '../assets/icons/javascript.svg'
import react from '../assets/icons/react.svg'
import node from '../assets/icons/nodejs.svg'
import express from '../assets/icons/expressjs.svg'
import jwt from '../assets/icons/jwt.svg'
import { Route, Link } from 'react-router-dom'


function About() {
    return (
        <section className="about">
            <h1 className='about__title'>About Me</h1>
            <div className='about__container'>
            <p className='about__container--info'>A full-stack developer located in Toronto. With a passion for creativity within web design and the challenge
            behind the functionality.</p>
            <img className='about__container--pic' src={me}></img>
            </div>
            <div className='about__skills'>
                <h3 className='about__skills--title'>Proficient In</h3>
                <img className='about__skills--pic' src={css} />
                <img className='about__skills--pic' src={react} />
                <img className='about__skills--pic' src={html} />
                <img className='about__skills--pic' src={java} />
                <img className='about__skills--pic' src={node} />
                <img className='about__skills--pic' src={express} />
                <img className='about__skills--pic' src={jwt} />
            </div>
        </section>
    );
}

export default About;