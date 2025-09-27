import { useMemo, useState } from "react";
import type { KeenSliderInstance } from "keen-slider";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import heroImage1 from "../assets/images/hero-slider-images/1.png";
import heroImage2 from "../assets/images/hero-slider-images/2.png";
import heroImage3 from "../assets/images/hero-slider-images/3.png";
import heroImage4 from "../assets/images/hero-slider-images/4.png";
import heroImage5 from "../assets/images/hero-slider-images/5.png";
import heroImage6 from "../assets/images/hero-slider-images/6.png";

type HeroCta = {
  label: string;
  href: string;
};

type HeroSlide = {
  id: string;
  badge: string;
  title: string;
  description: string;
  primaryCta: HeroCta;
  secondaryCta?: HeroCta;
  image: string;
  imageAlt: string;
  stat: string;
  statIcon?: string;
};

const heroSlides: HeroSlide[] = [
  {
    id: "global-education",
    badge: "Your gateway to global education",
    title: "MHS Global Associates is a modern organization",
    description:
      "MHS Global Associates is your trusted partner in navigating international education, offering pathways to world-class learning and career success.",
    primaryCta: { label: "Apply Now", href: "/#contact" },
    secondaryCta: { label: "Talk to an Expert", href: "/#about" },
    image: heroImage1,
    imageAlt: "Graduates celebrating their success on campus",
    stat: "2,500+ students placed in top universities",
    statIcon: "bi-mortarboard-fill",
  },
  {
    id: "career-support",
    badge: "Guidance at every milestone",
    title: "Personalised counselling for your application strategy",
    description:
      "Our advisors co-create your application roadmap, from university shortlisting to interview prep, so you apply with clarity and confidence.",
    primaryCta: { label: "Start Your Journey", href: "/#contact" },
    secondaryCta: { label: "Explore Services", href: "/#services" },
    image: heroImage2,
    imageAlt: "International students smiling together outdoors",
    stat: "98% visa success rate across destinations",
    statIcon: "bi-patch-check-fill",
  },
  {
    id: "scholarship-network",
    badge: "Connected to leading universities",
    title: "Unlock offers and scholarships worldwide",
    description:
      "Leverage our partner network of world-ranked universities to access priority processing, conditional offers, and scholarship opportunities.",
    primaryCta: { label: "View Destinations", href: "/#about" },
    secondaryCta: { label: "Apply for Scholarships", href: "/#contact" },
    image: heroImage3,
    imageAlt: "Student receiving guidance from an education mentor",
    stat: "Scholarships worth GBP 3M+ facilitated annually",
    statIcon: "bi-globe2",
  },
  {
    id: "visa-prep",
    badge: "End-to-end preparation",
    title: "Visa, travel, and onboarding handled by experts",
    description:
      "From document verification to pre-departure briefings, we keep every checklist item organised so you land abroad with confidence.",
    primaryCta: { label: "Plan My Move", href: "/#services" },
    secondaryCta: { label: "Join a Webinar", href: "/#events" },
    image: heroImage4,
    imageAlt: "Advisor guiding a student through visa documentation",
    stat: "24/7 helpline for travelling students",
    statIcon: "bi-headset",
  },
  {
    id: "global-community",
    badge: "Thrive in a new culture",
    title: "Build your community before you arrive on campus",
    description:
      "Take part in our destination-specific cohorts to meet peers, discover housing, and settle into student life faster.",
    primaryCta: { label: "Meet Your Cohort", href: "/#community" },
    secondaryCta: { label: "See Student Stories", href: "/#testimonials" },
    image: heroImage5,
    imageAlt: "Students exploring their new campus together",
    stat: "45+ active student chapters worldwide",
    statIcon: "bi-people-fill",
  },
  {
    id: "wellbeing-support",
    badge: "Support beyond admissions",
    title: "Well-being resources for every stage of your journey",
    description:
      "Access wellness workshops, career mentoring, and alumni meetups designed to support you academically and personally overseas.",
    primaryCta: { label: "Access Resources", href: "/#resources" },
    secondaryCta: { label: "Talk to Alumni", href: "/#alumni" },
    image: heroImage6,
    imageAlt: "Student enjoying a collaborative learning space abroad",
    stat: "1,200+ mentees matched with alumni each year",
    statIcon: "bi-heart-fill",
  },
];

const SLIDE_INTERVAL = 6000;

const HeroSlider = (): JSX.Element => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const autoSlide = useMemo(
    () => (slider: KeenSliderInstance) => {
      let timeout: ReturnType<typeof setTimeout> | undefined;

      const clearNextTimeout = () => {
        if (timeout) {
          clearTimeout(timeout);
          timeout = undefined;
        }
      };

      const nextTimeout = () => {
        clearNextTimeout();
        timeout = setTimeout(() => {
          slider.next();
        }, SLIDE_INTERVAL);
      };

      slider.on("created", nextTimeout);
      slider.on("dragStarted", clearNextTimeout);
      slider.on("animationEnded", nextTimeout);
      slider.on("updated", nextTimeout);
      slider.on("destroyed", clearNextTimeout);
    },
    []
  );

  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      renderMode: "performance",
      drag: true,
      slides: { perView: 1, spacing: 0 },
      created: (instance) => {
        setCurrentSlide(instance.track.details.rel);
      },
      slideChanged: (instance) => {
        setCurrentSlide(instance.track.details.rel);
      },
    },
    [autoSlide]
  );

  return (
    <section className="hero-section overflow-hidden">
      <div className="hero-slider-container position-relative">
        <div ref={sliderRef} className="keen-slider" aria-live="polite">
          {heroSlides.map((slide) => (
            <div className="keen-slider__slide" key={slide.id}>
              <div className="hero-slide row g-0 align-items-stretch">
                <div className="col-lg-6 d-flex align-items-center">
                  <div className="hero-copy w-100">
                    <div className="badge bg-primary-subtle text-primary-emphasis mb-3">
                      {slide.badge}
                    </div>
                    <h1 className="display-4 fw-bold text-dark mb-4">{slide.title}</h1>
                    <p className="lead text-secondary mb-4">{slide.description}</p>
                    <div className="d-flex flex-wrap gap-3">
                      <a className="btn btn-primary btn-lg" href={slide.primaryCta.href}>
                        {slide.primaryCta.label}
                      </a>
                      {slide.secondaryCta ? (
                        <a
                          className="btn btn-outline-primary btn-lg"
                          href={slide.secondaryCta.href}
                        >
                          {slide.secondaryCta.label}
                        </a>
                      ) : null}
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 hero-media-col">
                  <div className="hero-visual">
                    <img
                      src={slide.image}
                      alt={slide.imageAlt}
                      className="img-fluid"
                    />
                    <div className="hero-badge shadow-sm">
                      {slide.statIcon ? (
                        <i className={`bi ${slide.statIcon} text-primary me-2`}></i>
                      ) : null}
                      {slide.stat}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="hero-controls">
          {heroSlides.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              onClick={() => slider.current?.moveToIdx(index)}
              className={`hero-control-dot ${currentSlide === index ? "is-active" : ""}`}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={currentSlide === index ? "true" : undefined}
            >
              <span className="visually-hidden">Slide {index + 1}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;

