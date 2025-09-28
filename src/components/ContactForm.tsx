import type { FC } from 'react';

type ContactFormProps = {
  courses: Array<{
    title: string;
  }>;
};

const ContactForm: FC<ContactFormProps> = ({ courses }) => {
  return (
    <div className="card border-0 shadow-sm rounded-4 contact-form-card h-100 w-100 p-4 p-lg-5">
      <h3 className="fw-semibold text-dark mb-4">Send us a message</h3>
      <form className="row g-3">
        <div className="col-md-6">
          <label className="form-label">Full Name *</label>
          <input type="text" className="form-control" placeholder="Your name" required />
        </div>
        <div className="col-md-6">
          <label className="form-label">Email Address *</label>
          <input type="email" className="form-control" placeholder="name@email.com" required />
        </div>
        <div className="col-md-6">
          <label className="form-label">Phone Number *</label>
          <input type="tel" className="form-control" placeholder="Include country code" required />
        </div>
        <div className="col-md-6">
          <label className="form-label">Country *</label>
          <input type="text" className="form-control" placeholder="Where do you reside?" required />
        </div>
        <div className="col-12">
          <label className="form-label">Study Interest *</label>
          <select className="form-select" defaultValue="choose">
            <option value="choose" disabled>
              Select program type
            </option>
            {courses.map((course) => (
              <option key={course.title} value={course.title}>
                {course.title}
              </option>
            ))}
          </select>
        </div>
        <div className="col-12">
          <label className="form-label">Message</label>
          <textarea
            className="form-control"
            rows={5}
            placeholder="Tell us about your academic goals"
          ></textarea>
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary btn-lg contact-form-submit">
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;

