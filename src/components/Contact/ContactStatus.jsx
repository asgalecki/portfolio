import React from 'react';

const ContactStatus = ({ isSent }) => {
  const status = 'thank you for your message';
  const className = 'contact-form__status';

  return (
    <p
      className={`${className} ${
        isSent ? `${className}--active` : `${className}--inactive`
      }`}
    >
      status: <span className="contact-form__status--color">'{status}'</span>
    </p>
  );
};

export default ContactStatus;
