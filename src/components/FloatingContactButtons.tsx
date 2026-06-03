import type { FC } from 'react';
import { socialPlatforms } from '../data/socialPlatforms';

const socialClassNames: Record<string, string> = {
  linkedin: 'floating-contact__item--linkedin',
  youtube: 'floating-contact__item--youtube',
  instagram: 'floating-contact__item--instagram',
  tiktok: 'floating-contact__item--tiktok',
  facebook: 'floating-contact__item--facebook',
  twitter: 'floating-contact__item--twitter',
};

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
      {socialPlatforms.map((platform) => (
        <a
          key={platform.icon}
          className={`floating-contact__item ${socialClassNames[platform.icon] ?? ''}`.trim()}
          href={platform.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={platform.label}
        >
          <i className={`bi bi-${platform.icon}`}></i>
          <span className="visually-hidden">{platform.label}</span>
        </a>
      ))}
    </div>
  );
};

export default FloatingContactButtons;
