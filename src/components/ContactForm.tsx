import type { FC } from "react";

type ContactFormProps = {
  courses: Array<{
    title: string;
  }>;
};

const ContactForm: FC<ContactFormProps> = ({ courses }) => {
  return (
    <div className="contact-form-luxe">
      <header className="contact-form-luxe__header">
        <span className="contact-form-luxe__eyebrow">Tailored guidance</span>
        <h3 className="contact-form-luxe__title">Connect with our advisors</h3>
        <p className="contact-form-luxe__subtitle">
          Share your ambitions and we&apos;ll craft a personalised roadmap for
          your global studies.
        </p>
      </header>

      {/* <div className="contact-form-luxe__search" role="search">
        <span className="contact-form-luxe__search-icon" aria-hidden="true">
          <i className="bi bi-search"></i>
        </span>
        <input
          type="search"
          className="contact-form-luxe__search-input"
          placeholder="Search for programmes, universities, or destinations"
          aria-label="Search for programmes, universities, or destinations"
        />
      </div>
      <p className="contact-form-luxe__helper">
        This helps us align our first conversation with what inspires you the most.
      </p> */}

      <form className="contact-form-luxe__grid">
        <label className="contact-form-luxe__field">
          <span className="contact-form-luxe__field-label">Full Name *</span>
          <input
            type="text"
            className="contact-form-luxe__input"
            placeholder="Alex Morgan"
            required
          />
        </label>
        <label className="contact-form-luxe__field">
          <span className="contact-form-luxe__field-label">
            Email Address *
          </span>
          <input
            type="email"
            className="contact-form-luxe__input"
            placeholder="name@email.com"
            required
          />
        </label>
        <label className="contact-form-luxe__field">
          <span className="contact-form-luxe__field-label">Phone Number *</span>
          <input
            type="tel"
            className="contact-form-luxe__input"
            placeholder="+44 1234 567 890"
            required
          />
        </label>
        <label className="contact-form-luxe__field">
          <span className="contact-form-luxe__field-label">Country *</span>
          <input
            type="text"
            className="contact-form-luxe__input"
            placeholder="Where do you currently reside?"
            required
          />
        </label>
        <label className="contact-form-luxe__field contact-form-luxe__field--full">
          <span className="contact-form-luxe__field-label">
            Study Interest *
          </span>
          <div className="contact-form-luxe__select-shell">
            <select
              className="contact-form-luxe__select"
              defaultValue="choose"
              required
            >
              <option value="choose" disabled>
                Select programme type
              </option>
              {courses.map((course) => (
                <option key={course.title} value={course.title}>
                  {course.title}
                </option>
              ))}
            </select>
            <span className="contact-form-luxe__select-icon" aria-hidden="true">
              <i className="bi bi-chevron-down"></i>
            </span>
          </div>
        </label>
        <label className="contact-form-luxe__field contact-form-luxe__field--full">
          <span className="contact-form-luxe__field-label">Message</span>
          <textarea
            className="contact-form-luxe__textarea"
            rows={5}
            placeholder="Tell us about your academic goals, timelines, or scholarship needs."
          ></textarea>
        </label>
        <div className="contact-form-luxe__actions contact-form-luxe__field--full">
          <button type="submit" className="contact-form-luxe__submit">
            Send Message
            <span aria-hidden="true" className="contact-form-luxe__submit-icon">
              <i className="bi bi-arrow-up-right"></i>
            </span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
