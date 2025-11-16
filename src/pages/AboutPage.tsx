import { Link } from "react-router-dom";
import { SCRIPT_URL } from "../config/env";
import {
  useState,
  useRef,
  useEffect,
  type ChangeEvent,
  type FormEvent,
  type FocusEvent,
} from "react";

type AboutSection = {
  title: string;
  body: string;
};

const aboutSections: AboutSection[] = [
  {
    title: "Who We Are",
    body: "MHS Global Associates supports ambitious learners with practical guidance that turns international study plans into achievable outcomes.",
  },
  {
    title: "Our Vision",
    body: "Established in 2020, our mission is to make world-class campuses accessible to students everywhere. We match aspirations with suitable destinations, programmes, and timelines for lasting success.",
  },
  {
    title: "Student-Centred Approach",
    body: "Every conversation begins with attentive listening. We design personalised pathways that balance academic strengths, financial planning, and wellbeing so each milestone feels clear and supported.",
  },
  {
    title: "Proven Success Stories",
    body: "Hundreds of students have secured offers from renowned universities worldwide through careful preparation, deadline management, and post-offer mentoring.",
  },
  {
    title: "Our Commitment",
    body: "We continue to develop our service with integrity, responsiveness, and a commitment to education, enabling the next generation of global graduates to thrive abroad.",
  },
];

const serviceLinks: string[] = [
  "University application support",
  "Visa application support",
  "Accommodation guidance",
  "Travel planning support",
  "Financial planning advice",
  "Scholarship guidance",
];

const courseLinks: Array<{ label: string; target: string }> = [
  { label: "Foundation", target: "foundation" },
  { label: "Undergraduate", target: "undergraduate" },
  { label: "Postgraduate", target: "postgraduate" },
  { label: "Short Courses", target: "shortCourses" },
];

// Using centralised env config for script URL

const AboutPage = (): JSX.Element => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<{
    name: string;
    email: string;
    message: string;
  }>({
    name: "",
    email: "",
    message: "",
  });
  const [touched, setTouched] = useState<{
    name: boolean;
    email: boolean;
    message: boolean;
  }>({ name: false, email: false, message: false });
  const [status, setStatus] = useState({
    submitting: false,
    sent: false,
    error: "",
  });

  const [toast, setToast] = useState<{
    visible: boolean;
    type: "success" | "error";
    message: string;
  }>({ visible: false, type: "success", message: "" });
  const toastTimer = useRef<number | null>(null);

  type FieldName = "name" | "email" | "message";
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  function validate(values: typeof formData) {
    const next: typeof errors = { name: "", email: "", message: "" };
    if (!values.name.trim()) next.name = "Name is required";
    if (!values.email.trim()) next.email = "Email is required";
    else if (!emailRegex.test(values.email)) next.email = "Enter a valid email";
    if (!values.message.trim()) next.message = "Message is required";
    return next;
  }

  function validateField(name: FieldName, value: string): string {
    if (name === "name") return value.trim() ? "" : "Name is required";
    if (name === "email") {
      if (!value.trim()) return "Email is required";
      return emailRegex.test(value) ? "" : "Enter a valid email";
    }
    if (name === "message") return value.trim() ? "" : "Message is required";
    return "";
  }

  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target as { name: FieldName; value: string };
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  }

  function handleBlur(e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target as { name: FieldName; value: string };
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus({ submitting: true, sent: false, error: "" });

    // Validate all fields
    const nextErrors = validate(formData);
    setErrors(nextErrors);
    setTouched({ name: true, email: true, message: true });
    const isValid =
      !nextErrors.name && !nextErrors.email && !nextErrors.message;
    if (!isValid) {
      setStatus({ submitting: false, sent: false, error: "" });
      return;
    }
    const body = new FormData();
    body.append("name", formData.name);
    body.append("email", formData.email);
    body.append("message", formData.message);

    // meta fields for Apps Script processing (adjust to match your script)
    body.append("formId", "guidance");
    body.append("formTitle", "Personalised Guidance");
    body.append("formGoogleSheetName", "responses");
    body.append("formGoogleSendEmail", "info@mhsglobalassociates.com");
    body.append(
      "formDataNameOrder",
      JSON.stringify(["name", "email", "message"])
    );

    try {
      await fetch(SCRIPT_URL, { method: "POST", body, mode: "no-cors" });
      setStatus({ submitting: false, sent: true, error: "" });
      setFormData({ name: "", email: "", message: "" });
      setErrors({ name: "", email: "", message: "" });
      setTouched({ name: false, email: false, message: false });
      if (toastTimer.current) window.clearTimeout(toastTimer.current);
      setToast({
        visible: true,
        type: "success",
        message: "Thank you! Your message has been sent.",
      });
      toastTimer.current = window.setTimeout(
        () => setToast((t) => ({ ...t, visible: false })),
        4000
      );
    } catch (err) {
      setStatus({
        submitting: false,
        sent: false,
        error: "Something went wrong. Please try again.",
      });
      if (toastTimer.current) window.clearTimeout(toastTimer.current);
      setToast({
        visible: true,
        type: "error",
        message: "Something went wrong. Please try again.",
      });
      toastTimer.current = window.setTimeout(
        () => setToast((t) => ({ ...t, visible: false })),
        5000
      );
    }
  }

  useEffect(() => {
    return () => {
      if (toastTimer.current) window.clearTimeout(toastTimer.current);
    };
  }, []);
  return (
    <>
      <section className="about-hero position-relative text-white">
        <div className="about-hero-overlay"></div>
        <div className="container h-fit my-5 position-relative py-5 py-lg-6">
          <span className="badge bg-white text-primary fw-semibold mb-3 text-uppercase small shadow-sm">
            About Us
          </span>
          <h1 className="display-5 fw-bold mb-2">
            Supporting Global Student Success
          </h1>
          <p className="lead text-white-75 mb-0 col-lg-6">
            We work with motivated students through{" "}
            <strong>personalised admissions planning</strong>,{" "}
            <strong>financial guidance</strong>, and steady mentorship that
            opens access to leading universities.
          </p>
        </div>
      </section>

      <section className="about-content py-5 py-lg-6 bg-white">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-8">
              <div className="d-flex flex-column gap-4">
                {aboutSections.map((section) => (
                  <article key={section.title} className="about-section">
                    <h2 className="h4 fw-bold text-dark mb-2">
                      {section.title}
                    </h2>
                    <p className="text-secondary mb-0">{section.body}</p>
                  </article>
                ))}
              </div>

              <div className="card border-0 about-contact-card mt-5">
                <div className="card-body about-contact-card__body">
                  <div className="about-contact-card__eyebrow">
                    <span
                      aria-hidden="true"
                      className="about-contact-card__spark"
                    ></span>
                    Personalised Guidance
                  </div>
                  <h2 className="about-contact-card__title text-center">
                    Start a Conversation
                  </h2>
                  <p className="about-contact-card__subtitle">
                    Share your ambitions with our advisory team and receive a{" "}
                    <strong>personalised response</strong> within one business
                    day.
                  </p>
                  <form
                    id="consultation-form"
                    className="about-contact-card__form row g-3 scroll-target"
                    onSubmit={handleSubmit}
                    noValidate
                    aria-busy={status.submitting}
                  >
                    <div className="col-md-6">
                      <label className="form-label about-contact-card__label">
                        Name
                      </label>
                      <input
                        type="text"
                        className={`form-control py-3 form-control-lg about-contact-card__input ${
                          touched.name && errors.name ? "is-invalid" : ""
                        }`}
                        placeholder="First Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        aria-invalid={touched.name && !!errors.name}
                        aria-describedby={
                          touched.name && errors.name ? "name-error" : undefined
                        }
                        disabled={status.submitting}
                        required
                      />
                      {touched.name && errors.name ? (
                        <div
                          id="name-error"
                          className="invalid-feedback d-block"
                        >
                          {errors.name}
                        </div>
                      ) : null}
                    </div>
                    <div className="col-md-6">
                      <label className="form-label about-contact-card__label">
                        Email
                      </label>
                      <input
                        type="email"
                        className={`form-control py-3 form-control-lg about-contact-card__input ${
                          touched.email && errors.email ? "is-invalid" : ""
                        }`}
                        placeholder="Email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        aria-invalid={touched.email && !!errors.email}
                        aria-describedby={
                          touched.email && errors.email
                            ? "email-error"
                            : undefined
                        }
                        disabled={status.submitting}
                        required
                      />
                      {touched.email && errors.email ? (
                        <div
                          id="email-error"
                          className="invalid-feedback d-block"
                        >
                          {errors.email}
                        </div>
                      ) : null}
                    </div>
                    <div className="col-12">
                      <label className="form-label about-contact-card__label">
                        Message
                      </label>
                      <textarea
                        className={`form-control form-control-lg about-contact-card__textarea ${
                          touched.message && errors.message ? "is-invalid" : ""
                        }`}
                        rows={4}
                        placeholder="Tell us how we can help you"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        aria-invalid={touched.message && !!errors.message}
                        aria-describedby={
                          touched.message && errors.message
                            ? "message-error"
                            : undefined
                        }
                        disabled={status.submitting}
                        required
                      ></textarea>
                      {touched.message && errors.message ? (
                        <div
                          id="message-error"
                          className="invalid-feedback d-block"
                        >
                          {errors.message}
                        </div>
                      ) : null}
                    </div>
                    <div className="col-12">
                      <button
                        type="submit"
                        className="btn py-3 btn-lg btn-primary btn-lg w-100 about-contact-card__submit"
                        disabled={status.submitting}
                      >
                        {status.submitting ? (
                          <>
                            <span
                              className="spinner-border spinner-border-sm me-2"
                              role="status"
                              aria-hidden="true"
                            ></span>
                            Sending...
                          </>
                        ) : (
                          "Request Guidance"
                        )}
                      </button>
                      {false && status.sent ? (
                        <p
                          className="text-success text-center mt-3"
                          role="status"
                        >
                          Thanks! We’ll be in touch within one business day.
                        </p>
                      ) : null}
                      {false && status.error ? (
                        <p
                          className="text-danger text-center mt-3"
                          role="alert"
                        >
                          {status.error}
                        </p>
                      ) : null}
                    </div>
                  </form>
                  {toast.visible ? (
                    <div
                      className={`alert ${
                        toast.type === "success"
                          ? "alert-success"
                          : "alert-danger"
                      } position-fixed bottom-0 end-0 m-3 shadow`}
                      role={toast.type === "error" ? "alert" : "status"}
                      aria-live={
                        toast.type === "error" ? "assertive" : "polite"
                      }
                    >
                      {toast.message}
                    </div>
                  ) : null}
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <aside className="d-flex flex-column gap-4">
                <div className="card border-0 shadow-sm">
                  <div className="card-body">
                    <h3 className="h6 fw-semibold text-dark mb-3">
                      Our Services
                    </h3>
                    <ul className="list-unstyled d-flex flex-column gap-2 mb-0">
                      {serviceLinks.map((item) => (
                        <li key={item} className="about-list-item">
                          <i className="bi bi-chevron-right text-primary"></i>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="card border-0 shadow-sm">
                  <div className="card-body">
                    <h3 className="h6 fw-semibold text-dark mb-3">
                      Course Links
                    </h3>
                    <ul className="list-unstyled d-flex flex-column gap-2 mb-0">
                      {courseLinks.map(({ label, target }) => (
                        <li key={target} className="about-list-item">
                          <i className="bi bi-chevron-right text-primary"></i>
                          <Link
                            to={
                              (
                                {
                                  foundation: "/foundation-programmes",
                                  undergraduate: "/undergraduate-programmes",
                                  postgraduate: "/postgraduate-programmes",
                                  shortCourses: "/short-programmes",
                                } as Record<string, string>
                              )[target] ?? "/undergraduate-programmes"
                            }
                            className="about-list-link"
                          >
                            {label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
