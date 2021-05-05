
import './projects.scss';
import instock from '../assets/images/2-inStock.png'
import hackphone from '../assets/images/phone-decision.png'
import hackdesk from '../assets/images/hackathon-desk.png'
import elotto from '../assets/images/elotto-desk.png'
import { Route, Link } from 'react-router-dom'


function Projects() {
    return (
        <section className="projects" id='projects'>
            <h1 className='projects__title'>Projects</h1>
            <div className='projects__container'>
               
                <div className='projects__card'>
                <h2 className='projects__card--title1' >InStock</h2>
                    <img className='projects__card--img' src={instock} />
                    <p className='projects__card--content' >I was one of four developers working on a fully responsive, full stack website, created to conveniently manage and edit warehouses and their inventory. Used SCRUM(agile), React, Node.js, Axios, SASS, HTML5, CSS and express.js</p>
                </div>

                <div className='projects__card'>
                <h2 className='projects__card--title' >Google Hackathon</h2>
                <div className='projects__card--hack'>
                    <img className='projects__card--img' src={hackdesk} />
                    <img className='projects__card--imgHack' src={hackphone} />
                </div>
                    <p className='projects__card--content' >tasked with creating a digital solution to empower individuals or communities to access health care services. Used React, CSS, HTML5 and JavaScript </p>
                </div>

                <div className='projects__card'>
                <h2 className='projects__card--title' >e-Lotto</h2>
                    <img className='projects__card--img' src={elotto} />
                    <p className='projects__card--content' >A project I created for fun, created to place bets on popular e-sports match’s across multiple games and to store your winning's with a portfolio to track active and finalized bets. Used React, HTML, Saas, JavaScript, Node.js, express, RESTful API, bcrypt and JWT </p>
                </div>
            </div>
        </section>
    );
}

export default Projects;