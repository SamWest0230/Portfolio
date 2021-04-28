
import './contact.scss';
import { Route, Link } from 'react-router-dom'


function Contact() {
    return (
        <section className="contact">
            <h1 className='contact__title'>Contact Me</h1>
            <form className='contact__form'>
                <label className='contact__form--label'>Name</label>
                <input type='text' className='contact__form--input'></input>
                <label className='contact__form--label'>Email</label>
                <input type='email' className='contact__form--input'></input>
                <label className='contact__form--label'>Message</label>
                <textarea type='text' className='contact__form--input'></textarea>

            </form>
        </section>
    );
}

export default Contact;