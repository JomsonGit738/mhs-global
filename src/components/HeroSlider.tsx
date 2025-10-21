import { useMemo, useState, type CSSProperties } from "react";
import type { KeenSliderInstance } from "keen-slider";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useNavigate } from "react-router-dom";
import "./HeroSlider.css";

import heroImage1 from "../assets/images/hero-slider-images/1.png";
import heroImage2 from "../assets/images/hero-slider-images/2.png";
import heroImage3 from "../assets/images/hero-slider-images/3.png";
import heroImage4 from "../assets/images/hero-slider-images/5.png";

type HeroSlide = {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  ctaLabel: string;
  ctaHref: string;
};

const heroSlides: HeroSlide[] = [
  {
    id: "apply-now",
    title: "Apply Now for January 2026",
    description:
      "Start your international education journey and secure your place before deadlines close.",
    image: heroImage1,
    imageAlt: "Students collaborating in a modern study space",
    ctaLabel: "Apply Now",
    ctaHref: "/contact#contact-form",
  },
  {
    id: "scholarships-guidance",
    title: "Scholarships Guidance",
    description:
      "Explore funding opportunities and personalized advice to make your studies more affordable.",
    image: heroImage2,
    imageAlt: "Education consultant guiding international students",
    ctaLabel: "Explore Scholarships",
    ctaHref: "/student-services",
  },
  {
    id: "book-consultation",
    title: "Book a Consultation",
    description:
      "Get expert one-on-one guidance to choose the right course, university, and country for you.",
    image: heroImage3,
    imageAlt: "Advisor supporting a student with university applications",
    ctaLabel: "Book a Session",
    ctaHref: "/about#consultation-form",
  },
  {
    id: "partner-universities",
    title: "Our Partner Universities",
    description:
      "Access a global network of trusted universities offering diverse programs and pathways.",
    image: heroImage4,
    imageAlt: "Graduates celebrating their university acceptance",
    ctaLabel: "View Partners",
    ctaHref: "/#universities",
  },
];

const SLIDE_INTERVAL = 50000;

const HeroSlider = (): JSX.Element => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();
  const descriptionClampStyles: CSSProperties = {
    display: "-webkit-box",
    WebkitLineClamp: 3,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    textOverflow: "ellipsis",
  };

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

  const handleCTAClick = (destination: string) => () => {
    if (destination.includes("#")) {
      navigate(destination);

      const hash = destination.split("#")[1];
      if (hash) {
        window.setTimeout(() => {
          document.getElementById(hash)?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 250);
      }
      return;
    }

    navigate(destination);
  };

  return (
    <section className="hero-section hero-section--luxury overflow-hidden">
      <div className="hero-slider-container position-relative luxury-slider-shell">
        <div
          ref={sliderRef}
          className="keen-slider luxury-slider"
          aria-live="polite"
        >
          {heroSlides.map((slide, index) => {
            const slideStyles: CSSProperties = {
              animationDelay: `${index * 120}ms`,
            };

            (slideStyles as Record<string, string>)[
              "--slide-image"
            ] = `url(${slide.image})`;
            const mainHeadingText = slide.title;

            return (
              <div className="keen-slider__slide" key={slide.id}>
                <div
                  className="hero-slide row g-0 align-items-stretch luxury-hero-slide"
                  style={slideStyles}
                >
                  <span
                    className="hero-accent hero-accent--primary"
                    aria-hidden="true"
                  />
                  <span
                    className="hero-accent hero-accent--secondary"
                    aria-hidden="true"
                  />
                  <div className="col-lg-6 d-flex align-items-center">
                    <div className="hero-copy w-100 luxury-hero-copy">
                      <h1 className="hero-main-heading">
                        <span className="hero-main-heading__line">
                          {slide.title}
                        </span>
                      </h1>
                      <p
                        className="luxury-description"
                        style={descriptionClampStyles}
                      >
                        {slide.description}
                      </p>
                      <button
                        type="button"
                        className="hero-cta-link"
                        onClick={handleCTAClick(slide.ctaHref)}
                        aria-label={`${mainHeadingText} - ${slide.ctaLabel}`}
                      >
                        {slide.ctaLabel}
                      </button>
                    </div>
                  </div>
                  <div className="col-lg-6 hero-media-col" aria-hidden="true">
                    <div className="hero-visual"></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="hero-controls">
          {heroSlides.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              onClick={() => slider.current?.moveToIdx(index)}
              className={`hero-control-dot ${
                currentSlide === index ? "is-active" : ""
              }`}
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
