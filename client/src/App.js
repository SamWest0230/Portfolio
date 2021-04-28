
import './App.scss';
import { Route, Link, BrowserRouter, Switch } from 'react-router-dom'
import Nav from './components/nav'
import Projects from './components/projects'
import About from './components/about'
import Contact from './components/contact'

function App() {
  return (
    <section className="app">
      <BrowserRouter>
        <Nav />
        <div className='hero'>
          <div className='hero__left'>
            <div className='hero__card'>
              <h1 className='hero__card--name'>Sam West</h1>
              <h3 className='hero__card--title'>Full-Stack Developer</h3>
            </div>
          </div>
          <div className='hero__right'>
          </div>
        </div>
          <About />
          <Projects />
          <Contact />
      </BrowserRouter>
    </section>
  );
}

export default App;
