import { useMemo, useState, type CSSProperties } from "react";
import type { KeenSliderInstance } from "keen-slider";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useNavigate } from "react-router-dom";
import "./HeroSlider.css";

import heroImage1 from "../assets/images/hero-slider-images/1.png";
import heroImage2 from "../assets/images/hero-slider-images/2.png";
import heroImage3 from "../assets/images/hero-slider-images/3.png";
import heroImage4 from "../assets/images/hero-slider-images/4.png";
import heroImage5 from "../assets/images/hero-slider-images/5.png";

type HeroSlide = {
  id: string;
  heading: string;
  description: string;
  image: string;
  imageAlt: string;
  ctaLabel: string;
  ctaHref: string;
};

const heroSlides: HeroSlide[] = [
  {
    id: "who-we-are",
    heading: "Who We Are",
    description:
      "MHS Global Associates empowers students with personalised guidance that turns global education goals into achievable plans.",
    image: heroImage1,
    imageAlt: "Students collaborating in a modern study space",
    ctaLabel: "Learn More",
    ctaHref: "/about",
  },
  {
    id: "our-vision",
    heading: "Our Vision",
    description:
      "Founded in 2020, we create trusted pathways that connect ambitious learners with world-class universities across the globe.",
    image: heroImage2,
    imageAlt: "Education consultant guiding international students",
    ctaLabel: "Learn More",
    ctaHref: "/about",
  },
  {
    id: "student-centered",
    heading: "Student-Centered Approach",
    description:
      "From course selection to visas, our experts tailor every step to each student, keeping the journey transparent and stress-free.",
    image: heroImage3,
    imageAlt: "Advisor supporting a student with university applications",
    ctaLabel: "Learn More",
    ctaHref: "/about",
  },
  {
    id: "success-stories",
    heading: "Proven Success Stories",
    description:
      "Hundreds of students have launched global study journeys with us, gaining offers from prestigious institutions worldwide.",
    image: heroImage4,
    imageAlt: "Graduates celebrating their university acceptance",
    ctaLabel: "Learn More",
    ctaHref: "/about",
  },
  {
    id: "our-commitment",
    heading: "Our Commitment",
    description:
      "We stay committed to guiding, supporting, and inspiring the next generation of achievers with integrity and passion.",
    image: heroImage5,
    imageAlt: "Consultants discussing education plans with students",
    ctaLabel: "Learn More",
    ctaHref: "/about",
  },
];

const SLIDE_INTERVAL = 6000;

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

            (slideStyles as Record<string, string>)["--slide-image"] = `url(${slide.image})`;

            return (
              <div className="keen-slider__slide" key={slide.id}>
                <div
                  className="hero-slide row g-0 align-items-stretch luxury-hero-slide"
                  style={slideStyles}
                >
                  <div className="col-lg-6 d-flex align-items-center">
                    <div className="hero-copy w-100 luxury-hero-copy">
                      <h2 className="luxury-heading text-primary mb-3">
                        {slide.heading}
                      </h2>
                      <p
                        className="luxury-description text-secondary mb-4"
                        style={descriptionClampStyles}
                      >
                        {slide.description}
                      </p>
                      <button
                        type="button"
                        className="hero-cta-link"
                        onClick={handleCTAClick(slide.ctaHref)}
                        aria-label={`${slide.heading} - ${slide.ctaLabel}`}
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
