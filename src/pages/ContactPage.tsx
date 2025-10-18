import ContactContent, { ContactInfoItem } from "../components/ContactContent";

const contactInfo: ContactInfoItem[] = [
  {
    icon: "bi-telephone",
    label: "Phone",
    lines: [{ text: "+1 (555) 123-4567" }, { text: "+44 20 7946 0958" }],
  },
  {
    icon: "bi-envelope",
    label: "Email",
    lines: [
      { text: "info@mhsglobal.com", href: "mailto:info@mhsglobal.com" },
      {
        text: "admissions@mhsglobal.com",
        href: "mailto:admissions@mhsglobal.com",
      },
    ],
  },
  {
    icon: "bi-geo-alt",
    label: "Office",
    lines: [
      { text: "1st Floor, 101 Whitechapel High Road" },
      { text: "London E1 7RA, United Kingdom" },
    ],
  },
  {
    icon: "bi-clock",
    label: "Office Hours",
    lines: [
      { text: "Monday - Friday: 9:00 AM - 6:00 PM" },
      { text: "Saturday: 10:00 AM - 4:00 PM" },
    ],
  },
];

const contactCourses = [
  "Foundation Programmes",
  "Undergraduate Degrees",
  "Postgraduate Degrees",
  "Student Support",
  "Visa Guidance",
  "Scholarship Support",
].map((title) => ({ title }));

const ContactPage = (): JSX.Element => {
  return (
    <>
      <section className="contact-hero position-relative text-white">
        <div className="contact-hero-overlay"></div>
        <div className="container position-relative py-5 py-lg-6">
          <div className="row my-5 align-items-center g-4">
            <div className="col-lg-7 text-start contact-hero-copy">
              <span className="badge bg-white text-primary fw-semibold mb-3 text-uppercase shadow-sm contact-hero-badge">
                Contact Us
              </span>
              <h1 className="display-5 fw-bold mb-3 contact-hero-title">
                Connect with Our Advisory Team
              </h1>
              <p className="lead text-white-75 mb-0 contact-hero-lead">
                Engage with advisers who provide{" "}
                <strong>personalised guidance</strong> across admissions, visas,
                scholarships, and student support&mdash;every detail carefully
                considered for your journey.
              </p>
            </div>
            <div className="col-lg-5">
              <div className="contact-map card border-0 shadow-lg overflow-hidden">
                <iframe
                  title="MHS Global Associates Location"
                  src="https://www.google.com/maps?q=1st+Floor,+101+Whitechapel+High+Road,+London+E1+7RA,+United+Kingdom&output=embed"
                  width="100%"
                  height="260"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactContent
        info={contactInfo}
        courses={contactCourses}
        infoDescription="Contact our advisers for guidance on course selection, application planning, scholarships, and visa preparation. We are here to help you navigate each step of your international education journey."
        sectionId="contact"
        formId="contact-form"
      />
    </>
  );
};

export default ContactPage;
