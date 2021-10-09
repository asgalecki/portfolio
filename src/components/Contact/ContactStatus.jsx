import React from 'react';
import parse from 'html-react-parser';

const ContactStatus = ({ status }) => {
  const statusTemplate = `status: <span className="contact-form__status--color">'${status}'</span>`;

  return (
    <p className="contact-form__status">
      {status ? parse(`${statusTemplate}`) : ''}
    </p>
  );
};

export default ContactStatus;
