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
  const sectionClassName = ['contact-content py-5 py-lg-6', className]
    .filter(Boolean)
    .join(' ');

  return (
    <section id={sectionId} className={sectionClassName}>
      <div className="container position-relative">
        <div className="row g-4 g-lg-5 align-items-stretch contact-content-panels">
          <div className="col-lg-5 d-flex">
            <div className="card border-0 shadow-lg rounded-4 contact-info-card h-100 w-100">
              <div className="card-body p-4 p-lg-5 d-flex flex-column">
                <div className="mb-4">
                  <h2 className="h4 fw-bold text-primary mb-1">{infoTitle}</h2>
                  {infoSubtitle ? (
                    <p className="text-secondary fw-semibold mb-0">{infoSubtitle}</p>
                  ) : null}
                  {infoDescription ? (
                    <p className="text-secondary mb-0 mt-3 small">{infoDescription}</p>
                  ) : null}
                </div>
                <div className="contact-info-divider mb-4"></div>
                <div className="d-flex flex-column gap-4">
                  {info.map((item) => (
                    <div
                      key={item.label}
                      className="d-flex gap-3 align-items-start contact-info-item"
                    >
                      <span className="contact-icon icon-pill text-primary">
                        <i className={`bi ${item.icon}`}></i>
                      </span>
                      <div>
                        <div className="fw-semibold text-dark">{item.label}</div>
                        {item.lines.map((line, lineIndex) =>
                          line.href ? (
                            <a
                              key={`${item.label}-${lineIndex}`}
                              href={line.href}
                              className="text-secondary small text-decoration-none d-block"
                            >
                              {line.text}
                            </a>
                          ) : (
                            <div
                              key={`${item.label}-${lineIndex}`}
                              className="text-secondary small"
                            >
                              {line.text}
                            </div>
                          ),
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-7 d-flex">
            <ContactForm courses={courses} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactContent;
