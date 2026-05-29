import ContactContent, { ContactInfoItem } from "../components/ContactContent";
import contactHeroImage from "../assets/images/contact-us/1.png";

const contactInfo: ContactInfoItem[] = [
  {
    icon: "bi-envelope",
    label: "Email",
    lines: [
      {
        text: "info@mhsglobalassociates.com",
        href: "mailto:info@mhsglobalassociates.com",
      },
      {
        text: "admission@mhsglobalassociates.com",
        href: "mailto:admission@mhsglobalassociates.com",
      },
    ],
  },
  {
    icon: "bi-phone",
    label: "Mobile",
    lines: [{ text: "07521772131", href: "tel:07521772131" }],
  },
  {
    icon: "bi-geo-alt",
    label: "Office",
    lines: [
      { text: "Suite F5, New Road Business Centre" },
      { text: "109 New Road, Whitechapel, E 1 1HJ." },
    ],
  },
  {
    icon: "bi-clock",
    label: "Office Hours",
    lines: [
      { text: "Monday to Friday: 10:00 AM - 5:00 PM" },
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
        <div className="contact-hero-media" aria-hidden="true">
          <img
            src={contactHeroImage}
            alt=""
            className="contact-hero-image"
            decoding="async"
            width={1521}
            height={516}
            sizes="100vw"
          />
        </div>
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
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1141.3108862237777!2d-0.05676868277712285!3d51.519660332254155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761da75520c803%3A0xee69c987d59298b!2sMHS%20Global%20Associates!5e1!3m2!1sen!2sin!4v1764785969804!5m2!1sen!2sin"
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
