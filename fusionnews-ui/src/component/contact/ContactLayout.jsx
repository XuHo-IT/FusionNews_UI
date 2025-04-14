import React from 'react'
import ContactForm from './ContactForm'
import './contact.css'
import SocialMedia from '../social/SocialMedia'
import NewsLetter from '../social/NewsLetter'

const ContactLayout = () => {
    return (
        <div className="container-fluid mt-5 pt-3">
            <div className="container">
                <div className="row">
                    <ContactForm />
                    <div className="col-lg-4">
                        <SocialMedia />
                        <NewsLetter />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactLayout