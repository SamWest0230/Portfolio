import React from 'react';
import { Link } from "react-scroll";
import './nav.scss';
import burger from '../assets/icons/burger.svg'

class Nav extends React.Component{
state = {
    nav: false
}
 showNav = () =>{
        if (this.state.nav === false){
        this.setState({
            nav: true
        })
    }if(this.state.nav === true){
        document.getElementById('menu').classList.remove('show')
        document.getElementById('menu').classList.add('menu')
         this.setState({
        nav: false
        }) 
        }
    }
   

    render(){
        if(this.state.nav === true){
            document.getElementById('menu').classList.remove('menu')
            document.getElementById('menu').classList.add('show')
        }
        return(
        
            <section className='nav'>
                <img className='nav__burger' src={burger} onClick={ () => this.showNav()} />
                
                <div className='menu' id='menu'>
                <Link activeClass="active" to="about" spy={true} smooth={true} duration={1000}>
                <p className='show__link'>About</p>
                </Link>
                <Link activeClass="active" to="projects" spy={true} smooth={true} duration={1000}>
                  <p className='show__link'>Projects</p>
                  </Link>
                  <Link activeClass="active" to="contact" spy={true} smooth={true} duration={1000}>
                  <p className='show__link'>Contact Me</p>
                  </Link>
                </div>
    
            </section>
        )
    }
   
}export default Nav;