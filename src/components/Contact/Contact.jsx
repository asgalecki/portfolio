import React from 'react';
import ContactForm from './ContactForm';
import SocialMedia from './SocialMedia';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h1 className="contact__heading">contact</h1>
      <div className="contact__body">
        <div className="contact__description">
          <p className="contact__para">
            Contact me via social media or just send me a message.
          </p>
          <SocialMedia />
        </div>
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
