import { useMemo, useState } from 'react';
import type { KeenSliderInstance } from 'keen-slider';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

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
    id: 'global-education',
    badge: 'Your gateway to global education',
    title: 'MHS Global Associates is a modern organization',
    description:
      'MHS Global Associates is your trusted partner in navigating international education, offering pathways to world-class learning and career success.',
    primaryCta: { label: 'Apply Now', href: '/#contact' },
    secondaryCta: { label: 'Talk to an Expert', href: '/#about' },
    image:
      'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1100&q=80',
    imageAlt: 'Graduates celebrating their success together outdoors',
    stat: '2,500+ students placed in top universities',
    statIcon: 'bi-mortarboard-fill',
  },
  {
    id: 'career-support',
    badge: 'Guidance at every milestone',
    title: 'Personalised counselling for your application strategy',
    description:
      'Our advisors co-create your application roadmap, from university shortlisting to interview prep, so you apply with clarity and confidence.',
    primaryCta: { label: 'Start Your Journey', href: '/#contact' },
    secondaryCta: { label: 'Explore Services', href: '/#services' },
    image:
      'https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=1100&q=80',
    imageAlt: 'Student receiving guidance from an education consultant',
    stat: '98% visa success rate across major destinations',
    statIcon: 'bi-patch-check-fill',
  },
  {
    id: 'global-network',
    badge: 'Connected to leading universities',
    title: 'Unlock offers and scholarships worldwide',
    description:
      'Leverage our partner network of world-ranked universities to access priority processing, conditional offers, and scholarship opportunities.',
    primaryCta: { label: 'View Destinations', href: '/#about' },
    secondaryCta: { label: 'Apply for Scholarships', href: '/#contact' },
    image:
      'https://images.unsplash.com/photo-1522199710521-72d69614c702?auto=format&fit=crop&w=1100&q=80',
    imageAlt: 'Group of international students celebrating with flags',
    stat: 'Scholarships worth GBP 3M+ facilitated annually',
    statIcon: 'bi-globe2',
  },
];

const SLIDE_INTERVAL = 6000;

const HeroSlider = (): JSX.Element => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const autoSlide = useMemo(
    () => (slider: KeenSliderInstance) => {
      let timeout: ReturnType<typeof setTimeout> | undefined;
      let mouseOver = false;

      const clearNextTimeout = () => {
        if (timeout) {
          clearTimeout(timeout);
          timeout = undefined;
        }
      };

      const nextTimeout = () => {
        clearNextTimeout();
        if (mouseOver) {
          return;
        }
        timeout = setTimeout(() => {
          slider.next();
        }, SLIDE_INTERVAL);
      };

      const handleMouseOver = () => {
        mouseOver = true;
        clearNextTimeout();
      };

      const handleMouseOut = () => {
        mouseOver = false;
        nextTimeout();
      };

      slider.on('created', () => {
        slider.container.addEventListener('mouseover', handleMouseOver);
        slider.container.addEventListener('mouseout', handleMouseOut);
        nextTimeout();
      });
      slider.on('dragStarted', clearNextTimeout);
      slider.on('animationEnded', nextTimeout);
      slider.on('updated', nextTimeout);
      slider.on('destroyed', () => {
        slider.container.removeEventListener('mouseover', handleMouseOver);
        slider.container.removeEventListener('mouseout', handleMouseOut);
        clearNextTimeout();
      });
    },
    []
  );

  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      renderMode: 'performance',
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
    <section className="hero-section py-5 py-lg-6">
      <div className="container position-relative">
        <div ref={sliderRef} className="keen-slider" aria-live="polite">
          {heroSlides.map((slide) => (
            <div className="keen-slider__slide" key={slide.id}>
              <div className="row align-items-center g-5">
                <div className="col-lg-6">
                  <div className="badge bg-primary-subtle text-primary-emphasis mb-3">{slide.badge}</div>
                  <h1 className="display-4 fw-bold text-dark mb-4">{slide.title}</h1>
                  <p className="lead text-secondary mb-4">{slide.description}</p>
                  <div className="d-flex flex-wrap gap-3">
                    <a className="btn btn-primary btn-lg" href={slide.primaryCta.href}>
                      {slide.primaryCta.label}
                    </a>
                    {slide.secondaryCta ? (
                      <a className="btn btn-outline-primary btn-lg" href={slide.secondaryCta.href}>
                        {slide.secondaryCta.label}
                      </a>
                    ) : null}
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="hero-visual position-relative">
                    <img src={slide.image} alt={slide.imageAlt} className="img-fluid rounded-4 shadow-lg" />
                    <div className="hero-badge shadow-sm">
                      {slide.statIcon ? <i className={`bi ${slide.statIcon} text-primary me-2`}></i> : null}
                      {slide.stat}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="d-flex justify-content-center gap-2 mt-4">
          {heroSlides.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              onClick={() => slider.current?.moveToIdx(index)}
              className={`btn btn-sm rounded-pill ${currentSlide === index ? 'btn-primary' : 'btn-outline-primary'}`}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={currentSlide === index ? 'true' : undefined}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
