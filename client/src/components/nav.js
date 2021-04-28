import React from 'react';
import './nav.scss';
import burger from '../assets/icons/burger.svg'

class Nav extends React.Component{
state = {
    nav: false
}
    showNav = () =>{
        this.setState({
            nav: true
        })
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
                <p className='show__link'>About</p>
                  <p className='show__link'>Projects</p>
                  <p className='show__link'>Contact Me</p>
                </div>
    
            </section>
        )
    }
   
}export default Nav;