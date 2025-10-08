import ContactContent, { ContactInfoItem } from "../components/ContactContent";
import contactOverlay from "../assets/images/contact-us/2.png";

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
  "Foundation Programs",
  "Undergraduate Degrees",
  "Postgraduate Degrees",
  "Student Services",
  "Visa Guidance",
  "Scholarship Support",
].map((title) => ({ title }));

const ContactPage = (): JSX.Element => {
  return (
    <>
      <section className="contact-hero position-relative text-white">
        {/* <div className="contact-hero-overlay"></div> */}
        <div className="container position-relative py-5 py-lg-6">
          <div className="row my-5 align-items-center g-4">
            <div className="col-lg-7 text-start">
              <span className="badge bg-white text-primary fw-semibold mb-3 text-uppercase small shadow-sm">
                Contact Us
              </span>
              <h1 className="display-5 fw-bold mb-2">We are happy to help</h1>
              <p className="lead text-white-75 mb-0">
                Reach out to our dedicated team for personalised support on
                admissions, visas, scholarships, and everything in between.
              </p>
            </div>
            <div className="col-lg-5">
              <div className="contact-map card border-0 shadow-lg overflow-hidden">
                <img
                  src={contactOverlay}
                  alt="Map showing MHS Global Associates location"
                  className="img-fluid w-100"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactContent
        info={contactInfo}
        courses={contactCourses}
        infoDescription="Contact our advisors for guidance on course selection, application strategy, scholarships, and visa preparation. We're here to help you navigate every step of your international education journey."
      />
    </>
  );
};

export default ContactPage;
