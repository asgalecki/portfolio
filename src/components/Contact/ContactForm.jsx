import React, { useState } from 'react';
import ContactStatus from './ContactStatus';

const ContactForm = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSent(true);
  };

  return (
    <form
      className="contact-form"
      method="post"
      onSubmit={(e) => handleSubmit(e)}
      netlify-honeypot="bot-field"
      data-netlify="true"
      name="Contact Form"
      action={false}
    >
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value="Contact Form" />
      <ul className="contact-form__list">
        <li className="contact-form__element">
          <label htmlFor="contact-form__email" className="contact-form__label">
            email:
          </label>
          <input
            type="email"
            name="email"
            id="contact-form__email"
            className="contact-form__input"
            required
            autoComplete="off"
            minLength="6"
            maxLength="50"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </li>
        <li className="contact-form__element">
          <label htmlFor="contact-form__msg" className="contact-form__label">
            message:
          </label>
          <textarea
            name="message"
            id="contact-form__msg"
            className="contact-form__input"
            required
            autoComplete="off"
            rows="5"
            minLength="2"
            maxLength="1000"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </li>
        <li className="contact-form__element contact-form__element--margin">
          <ContactStatus isSent={isSent} />
        </li>
        <li className="contact-form__element contact-form__element--row">
          <button type="submit" className="contact-form__button">
            Send
          </button>
          {isSent ? (
            <button
              type="button"
              className="contact-form__button contact-form__button--cancel"
              onClick={() => setIsSent(false)}
            >
              X
            </button>
          ) : null}
        </li>
      </ul>
    </form>
  );
};

export default ContactForm;
