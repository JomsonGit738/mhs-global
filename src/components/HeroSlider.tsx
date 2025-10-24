import { useMemo, useState, type CSSProperties } from "react";
import type { KeenSliderInstance } from "keen-slider";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useNavigate } from "react-router-dom";
import "./HeroSlider.css";

// GSAP animations removed from HeroSlider

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
    title: "Scholarship Guidance",
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

  // GSAP reveal animations removed

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

  // GSAP prepareSlide removed

  /* const animateSlide = useCallback((index: number) => {
    const slideId = heroSlides[index]?.id;
    if (!slideId) {
      return;
    }

    const sliderRoot = sliderContainerRef.current;
    if (!sliderRoot) {
      window.requestAnimationFrame(() => {
        animateSlide(index);
      });
      return;
    }

    const visibleSlide =
      sliderRoot.querySelector<HTMLElement>(
        `.keen-slider__slide[aria-hidden="false"][data-slide-id="${slideId}"] .hero-slide`
      ) ??
      sliderRoot.querySelector<HTMLElement>(
        `.keen-slider__slide[data-slide-id="${slideId}"] .hero-slide`
      );

    if (!visibleSlide) {
      window.requestAnimationFrame(() => {
        animateSlide(index);
      });
      return;
    }

    const heading = visibleSlide.querySelector<HTMLElement>(
      ".hero-main-heading__line"
    );
    const description = visibleSlide.querySelector<HTMLElement>(
      ".luxury-description"
    );
    const button =
      visibleSlide.querySelector<HTMLButtonElement>(".hero-cta-link");
    const accents = Array.from(
      visibleSlide.querySelectorAll<HTMLElement>(".hero-accent")
    );
    const visual = visibleSlide.querySelector<HTMLElement>(".hero-visual");

    if (!heading || !description || !button) {
      return;
    }

    if (animatedSlidesRef.current.has(slideId)) {
      const elements = [
        heading,
        description,
        button,
        visual,
        ...accents,
      ].filter((el): el is HTMLElement => Boolean(el));

      if (elements.length) {
        gsapInstance.set(elements, { clearProps: "all", autoAlpha: 1 });
      }
      return;
    }

    animatedSlidesRef.current.add(slideId);

    if (activeTimelineRef.current) {
      activeTimelineRef.current.progress(1);
      activeTimelineRef.current.kill();
    }

    const timeline = createGsapTimeline();

    // Ensure elements are preset before animating
    if (accents.length) {
      gsapInstance.set(accents, {
        autoAlpha: 0,
        scaleX: 0.82,
        transformOrigin: "left center",
      });
      timeline.to(
        accents,
        {
          autoAlpha: 1,
          scaleX: 1,
          duration: 0.6,
          stagger: 0.12,
          ease: "power2.out",
        },
        0
      );
    }

    gsapInstance.set(heading, { autoAlpha: 0, y: 48 });
    timeline.to(heading, { autoAlpha: 1, y: 0, duration: 0.9 });

    gsapInstance.set(description, { autoAlpha: 0, y: 28 });
    timeline.to(description, { autoAlpha: 1, y: 0, duration: 0.75 }, "-=0.55");

    gsapInstance.set(button, { autoAlpha: 0, y: 18 });
    timeline.to(button, { autoAlpha: 1, y: 0, duration: 0.6 }, "-=0.48");

    if (visual) {
      gsapInstance.set(visual, { autoAlpha: 0, scale: 1.035 });
      timeline.to(
        visual,
        { autoAlpha: 1, scale: 1, duration: 1, ease: "power2.out" },
        "-=0.72"
      );
    }

    activeTimelineRef.current = timeline;
  }, []); */

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
    // If a hash is present, navigate then perform an offset scroll
    if (destination.includes("#")) {
      navigate(destination);

      const hash = destination.split("#")[1];
      if (hash) {
        const scrollWithOffset = () => {
          const raw = document.getElementById(hash);
          if (!raw) return;

          // For About page consultation form, prefer the card container so the
          // "Start a Conversation" heading is included in view.
          const cardContainer = raw.closest<HTMLElement>(".about-contact-card");
          const target = cardContainer ?? raw;

          const header = document.querySelector<HTMLElement>(".header-luxe");
          const headerHeight = header?.offsetHeight ?? 0;

          // Leave a small visual gap below the header for breathing room
          const extra = 16;
          const y = target.getBoundingClientRect().top + window.scrollY - (headerHeight + extra);
          window.scrollTo({ top: Math.max(0, y), behavior: "smooth" });
        };

        // Give the route time to render, then adjust scroll.
        window.setTimeout(scrollWithOffset, 300);
        // Nudge again in case late layout shifts (images/fonts) moved things.
        window.setTimeout(scrollWithOffset, 900);
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
          {heroSlides.map((slide) => {
            const slideStyles: CSSProperties = {};

            (slideStyles as Record<string, string>)[
              "--slide-image"
            ] = `url(${slide.image})`;
            const mainHeadingText = slide.title;

            return (
              <div
                className="keen-slider__slide"
                key={slide.id}
                data-slide-id={slide.id}
              >
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
