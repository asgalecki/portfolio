import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';

const Modal = ({ modalImage, imageAlt, handleClose, isTriggered }) => {
  const triggerShow = isTriggered
    ? 'modal modal--active'
    : 'modal modal--inactive';
  return (
    <div className={triggerShow}>
      <section className="modal__body">
        <button type="button" className="modal__button" onClick={handleClose}>
          X
        </button>
        <GatsbyImage
          image={modalImage}
          alt={imageAlt}
          className="modal__image"
          onClick={handleClose}
        />
      </section>
    </div>
  );
};

export default Modal;
