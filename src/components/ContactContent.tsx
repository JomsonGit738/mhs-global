import type { FC } from 'react';

import ContactForm from './ContactForm';

export type ContactInfoLine = {
  text: string;
  href?: string;
};

export type ContactInfoItem = {
  icon: string;
  label: string;
  lines: ContactInfoLine[];
};

type ContactContentProps = {
  info: ContactInfoItem[];
  courses: Array<{
    title: string;
  }>;
  infoTitle?: string;
  infoSubtitle?: string;
  infoDescription?: string;
  sectionId?: string;
  className?: string;
};

const ContactContent: FC<ContactContentProps> = ({
  info,
  courses,
  infoTitle = 'MHS Global Associates',
  infoSubtitle = 'Contact Information',
  infoDescription,
  sectionId,
  className,
}) => {
  const sectionClassName = ['contact-luxe', className].filter(Boolean).join(' ');

  return (
    <section id={sectionId} className={sectionClassName}>
      <div className="contact-luxe__container">
        <div className="contact-luxe__surface">
          <div className="contact-luxe__halo" aria-hidden />
          <div className="contact-luxe__grid">
            <aside className="contact-luxe__info" data-animate="fade-up">
              {infoSubtitle ? (
                <span className="contact-luxe__eyebrow">{infoSubtitle}</span>
              ) : null}
              <h2 className="contact-luxe__title">{infoTitle}</h2>
              {infoDescription ? (
                <p className="contact-luxe__description">{infoDescription}</p>
              ) : null}

              <ul className="contact-luxe__list">
                {info.map((item) => (
                  <li key={item.label} className="contact-luxe__list-item">
                    <span className="contact-luxe__icon">
                      <i className={`bi ${item.icon}`} aria-hidden="true"></i>
                    </span>
                    <div>
                      <span className="contact-luxe__label">{item.label}</span>
                      <div className="contact-luxe__lines">
                        {item.lines.map((line, lineIndex) =>
                          line.href ? (
                            <a
                              key={`${item.label}-${lineIndex}`}
                              href={line.href}
                              className="contact-luxe__link"
                            >
                              {line.text}
                            </a>
                          ) : (
                            <span
                              key={`${item.label}-${lineIndex}`}
                              className="contact-luxe__line"
                            >
                              {line.text}
                            </span>
                          ),
                        )}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </aside>

            <div className="contact-luxe__form" data-animate="fade-up">
              <ContactForm courses={courses} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactContent;
