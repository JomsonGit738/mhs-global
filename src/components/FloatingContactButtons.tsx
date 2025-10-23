import type { FC } from 'react';

const FloatingContactButtons: FC = () => {
  return (
    <div className="floating-contact" aria-label="Quick contact options">
      <a
        className="floating-contact__item floating-contact__item--whatsapp"
        href="https://wa.me/447521772131"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
      >
        <i className="bi bi-whatsapp"></i>
        <span className="visually-hidden">WhatsApp</span>
      </a>
      <a
        className="floating-contact__item floating-contact__item--call"
        href="tel:+442045975444"
        aria-label="Call us"
      >
        <i className="bi bi-telephone"></i>
        <span className="visually-hidden">Call</span>
      </a>
      <a
        className="floating-contact__item floating-contact__item--mail"
        href="mailto:info@mhsglobalassociates.com"
        aria-label="Email us"
      >
        <i className="bi bi-envelope"></i>
        <span className="visually-hidden">Email</span>
      </a>
    </div>
  );
};

export default FloatingContactButtons;
