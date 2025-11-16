import {
  useState,
  useRef,
  useEffect,
  type FC,
  type ChangeEvent,
  type FocusEvent,
  type FormEvent,
} from "react";
import { SCRIPT_URL } from "../config/env";

type ContactFormProps = {
  courses: Array<{
    title: string;
  }>;
};

// Using centralised env config for script URL

type FieldName =
  | "name"
  | "email"
  | "phone"
  | "country"
  | "studyInterest"
  | "message";

const ContactForm: FC<ContactFormProps> = ({ courses }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    studyInterest: "choose",
    message: "",
  });

  const [errors, setErrors] = useState<{
    name: string;
    email: string;
    phone: string;
    country: string;
    studyInterest: string;
    message: string;
  }>({
    name: "",
    email: "",
    phone: "",
    country: "",
    studyInterest: "",
    message: "",
  });

  const [touched, setTouched] = useState<{
    name: boolean;
    email: boolean;
    phone: boolean;
    country: boolean;
    studyInterest: boolean;
    message: boolean;
  }>({
    name: false,
    email: false,
    phone: false,
    country: false,
    studyInterest: false,
    message: false,
  });

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

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  const nameRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const phoneRef = useRef<HTMLInputElement | null>(null);
  const countryRef = useRef<HTMLInputElement | null>(null);
  const studyInterestRef = useRef<HTMLSelectElement | null>(null);
  const messageRef = useRef<HTMLTextAreaElement | null>(null);

  function validate(values: typeof formData) {
    const next: typeof errors = {
      name: "",
      email: "",
      phone: "",
      country: "",
      studyInterest: "",
      message: "",
    };
    if (!values.name.trim()) next.name = "Full name is required";
    if (!values.email.trim()) next.email = "Email is required";
    else if (!emailRegex.test(values.email)) next.email = "Enter a valid email";
    const digits = values.phone.replace(/\D/g, "");
    if (!values.phone.trim()) next.phone = "Phone number is required";
    else if (digits.length < 7) next.phone = "Enter a valid phone number";
    if (!values.country.trim()) next.country = "Country is required";
    if (!values.studyInterest || values.studyInterest === "choose")
      next.studyInterest = "Please select a study interest";
    // message is optional; no required validation
    return next;
  }

  function validateField(name: FieldName, value: string): string {
    if (name === "name") return value.trim() ? "" : "Full name is required";
    if (name === "email") {
      if (!value.trim()) return "Email is required";
      return emailRegex.test(value) ? "" : "Enter a valid email";
    }
    if (name === "phone") {
      if (!value.trim()) return "Phone number is required";
      const digits = value.replace(/\D/g, "");
      return digits.length >= 7 ? "" : "Enter a valid phone number";
    }
    if (name === "country") return value.trim() ? "" : "Country is required";
    if (name === "studyInterest")
      return value && value !== "choose"
        ? ""
        : "Please select a study interest";
    // message optional; allow empty
    return "";
  }

  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target as { name: FieldName; value: string };
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  }

  function handleBlur(
    e: FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target as { name: FieldName; value: string };
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus({ submitting: true, sent: false, error: "" });

    const nextErrors = validate(formData);
    setErrors(nextErrors);
    setTouched({
      name: true,
      email: true,
      phone: true,
      country: true,
      studyInterest: true,
      message: true,
    });
    const isValid = Object.values(nextErrors).every((v) => !v);
    if (!isValid) {
      setStatus({ submitting: false, sent: false, error: "" });
      const order: FieldName[] = [
        "name",
        "email",
        "phone",
        "country",
        "studyInterest",
        "message",
      ];
      const first = order.find(
        (f) => (nextErrors as Record<string, string>)[f]
      );
      const focusMap: Record<
        FieldName,
        React.RefObject<
          HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
        >
      > = {
        name: nameRef as React.RefObject<HTMLInputElement>,
        email: emailRef as React.RefObject<HTMLInputElement>,
        phone: phoneRef as React.RefObject<HTMLInputElement>,
        country: countryRef as React.RefObject<HTMLInputElement>,
        studyInterest: studyInterestRef as React.RefObject<HTMLSelectElement>,
        message: messageRef as React.RefObject<HTMLTextAreaElement>,
      };
      if (first) {
        const el = focusMap[first].current as HTMLElement | null;
        el?.scrollIntoView({ behavior: "smooth", block: "center" });
        el?.focus();
      }
      return;
    }

    const body = new FormData();
    body.append("name", formData.name);
    body.append("email", formData.email);
    body.append("phone", formData.phone);
    body.append("country", formData.country);
    body.append("studyInterest", formData.studyInterest);
    body.append("message", formData.message);

    body.append("formId", "application");
    body.append("formTitle", "New student application");
    body.append("formGoogleSheetName", "responses");
    body.append("formGoogleSendEmail", "info@mhsglobalassociates.com");
    body.append(
      "formDataNameOrder",
      JSON.stringify([
        "name",
        "email",
        "phone",
        "country",
        "studyInterest",
        "message",
      ])
    );

    try {
      await fetch(SCRIPT_URL, { method: "POST", body, mode: "no-cors" });
      setStatus({ submitting: false, sent: true, error: "" });
      setFormData({
        name: "",
        email: "",
        phone: "",
        country: "",
        studyInterest: "choose",
        message: "",
      });
      setErrors({
        name: "",
        email: "",
        phone: "",
        country: "",
        studyInterest: "",
        message: "",
      });
      setTouched({
        name: false,
        email: false,
        phone: false,
        country: false,
        studyInterest: false,
        message: false,
      });
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
    <div className="contact-form-luxe">
      <header className="contact-form-luxe__header">
        <span className="contact-form-luxe__eyebrow">
          Personalised guidance
        </span>
        <h3 className="contact-form-luxe__title">Connect with our advisers</h3>
        <p className="contact-form-luxe__subtitle">
          Share your ambitions and we will prepare a personalised roadmap for
          your global studies.
        </p>
      </header>

      <form
        className="contact-form-luxe__grid"
        onSubmit={handleSubmit}
        noValidate
        aria-busy={status.submitting}
      >
        <label className="contact-form-luxe__field">
          <span className="contact-form-luxe__field-label">Full Name *</span>
          <input
            type="text"
            className={`contact-form-luxe__input ${
              touched.name && errors.name ? "is-invalid" : ""
            }`}
            placeholder="Alex Morgan"
            name="name"
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-invalid={touched.name && !!errors.name}
            aria-describedby={
              touched.name && errors.name ? "name-error" : undefined
            }
            ref={nameRef}
            disabled={status.submitting}
            required
          />
          {touched.name && errors.name ? (
            <div
              id="name-error"
              className="contact-form-luxe__error invalid-feedback d-block text-danger small"
            >
              {errors.name}
            </div>
          ) : null}
        </label>
        <label className="contact-form-luxe__field">
          <span className="contact-form-luxe__field-label">
            Email Address *
          </span>
          <input
            type="email"
            className={`contact-form-luxe__input ${
              touched.email && errors.email ? "is-invalid" : ""
            }`}
            placeholder="name@email.com"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-invalid={touched.email && !!errors.email}
            aria-describedby={
              touched.email && errors.email ? "email-error" : undefined
            }
            ref={emailRef}
            disabled={status.submitting}
            required
          />
          {touched.email && errors.email ? (
            <div
              id="email-error"
              className="contact-form-luxe__error invalid-feedback d-block text-danger small"
            >
              {errors.email}
            </div>
          ) : null}
        </label>
        <label className="contact-form-luxe__field">
          <span className="contact-form-luxe__field-label">Phone Number *</span>
          <input
            type="tel"
            className={`contact-form-luxe__input ${
              touched.phone && errors.phone ? "is-invalid" : ""
            }`}
            placeholder="+44 1234 567 890"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-invalid={touched.phone && !!errors.phone}
            aria-describedby={
              touched.phone && errors.phone ? "phone-error" : undefined
            }
            ref={phoneRef}
            disabled={status.submitting}
            required
          />
          {touched.phone && errors.phone ? (
            <div
              id="phone-error"
              className="contact-form-luxe__error invalid-feedback d-block text-danger small"
            >
              {errors.phone}
            </div>
          ) : null}
        </label>
        <label className="contact-form-luxe__field">
          <span className="contact-form-luxe__field-label">Country *</span>
          <input
            type="text"
            className={`contact-form-luxe__input ${
              touched.country && errors.country ? "is-invalid" : ""
            }`}
            placeholder="Where do you currently reside?"
            name="country"
            value={formData.country}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-invalid={touched.country && !!errors.country}
            aria-describedby={
              touched.country && errors.country ? "country-error" : undefined
            }
            ref={countryRef}
            disabled={status.submitting}
            required
          />
          {touched.country && errors.country ? (
            <div
              id="country-error"
              className="contact-form-luxe__error invalid-feedback d-block text-danger small"
            >
              {errors.country}
            </div>
          ) : null}
        </label>
        <label className="contact-form-luxe__field contact-form-luxe__field--full">
          <span className="contact-form-luxe__field-label">
            Study Interest *
          </span>
          <div className="contact-form-luxe__select-shell">
            <select
              className={`contact-form-luxe__select ${
                touched.studyInterest && errors.studyInterest
                  ? "is-invalid"
                  : ""
              }`}
              name="studyInterest"
              value={formData.studyInterest}
              onChange={handleChange}
              onBlur={handleBlur}
              aria-invalid={touched.studyInterest && !!errors.studyInterest}
              aria-describedby={
                touched.studyInterest && errors.studyInterest
                  ? "studyInterest-error"
                  : undefined
              }
              ref={studyInterestRef}
              disabled={status.submitting}
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
          {touched.studyInterest && errors.studyInterest ? (
            <div
              id="studyInterest-error"
              className="contact-form-luxe__error invalid-feedback d-block text-danger small"
            >
              {errors.studyInterest}
            </div>
          ) : null}
        </label>
        <label className="contact-form-luxe__field contact-form-luxe__field--full">
          <span className="contact-form-luxe__field-label">Message</span>
          <textarea
            className={`contact-form-luxe__textarea ${
              touched.message && errors.message ? "is-invalid" : ""
            }`}
            rows={5}
            placeholder="Tell us about your academic goals, timelines, or scholarship needs."
            name="message"
            value={formData.message}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-invalid={touched.message && !!errors.message}
            aria-describedby={
              touched.message && errors.message ? "message-error" : undefined
            }
            ref={messageRef}
            disabled={status.submitting}
          ></textarea>
          {touched.message && errors.message ? (
            <div
              id="message-error"
              className="contact-form-luxe__error invalid-feedback d-block text-danger small"
            >
              {errors.message}
            </div>
          ) : null}
        </label>
        <div className="contact-form-luxe__actions contact-form-luxe__field--full">
          <button
            type="submit"
            className="contact-form-luxe__submit"
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
              "Send Message"
            )}
            <span aria-hidden="true" className="contact-form-luxe__submit-icon">
              <i className="bi bi-arrow-up-right"></i>
            </span>
          </button>
        </div>
      </form>
      {toast.visible ? (
        <div
          className={`alert ${
            toast.type === "success" ? "alert-success" : "alert-danger"
          } position-fixed bottom-0 end-0 m-3 shadow`}
          role={toast.type === "error" ? "alert" : "status"}
          aria-live={toast.type === "error" ? "assertive" : "polite"}
        >
          {toast.message}
        </div>
      ) : null}
    </div>
  );
};

export default ContactForm;
