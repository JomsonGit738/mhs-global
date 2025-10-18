import { useMemo } from "react";
import type { KeenSliderInstance } from "keen-slider";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import universityOfBirmingham from "../assets/images/universities/1.png";
import universityOfAberdeen from "../assets/images/universities/2.png";
import bangorUniversity from "../assets/images/universities/3.png";
import astonUniversity from "../assets/images/universities/4.png";
import aberystwythUniversity from "../assets/images/universities/5.png";

const partnerUniversities = [
  { name: "University of Birmingham", logo: universityOfBirmingham },
  { name: "University of Aberdeen", logo: universityOfAberdeen },
  { name: "Bangor University", logo: bangorUniversity },
  { name: "Aston University", logo: astonUniversity },
  { name: "Aberystwyth University", logo: aberystwythUniversity },
];

const sliderUniversities = [...partnerUniversities, ...partnerUniversities];

const SLIDE_DURATION = 7000;

const PartnerUniversitiesSlider = (): JSX.Element => {
  const autoScroll = useMemo(
    () => (slider: KeenSliderInstance) => {
      let animationFrameId: number | undefined;

      const scheduleNext = () => {
        if (animationFrameId) {
          cancelAnimationFrame(animationFrameId);
        }
        animationFrameId = requestAnimationFrame(() => {
          slider.moveToIdx(slider.track.details.abs + 1, true, {
            duration: SLIDE_DURATION,
            easing: (t) => t,
          });
        });
      };

      slider.on("created", scheduleNext);
      slider.on("animationEnded", scheduleNext);
      slider.on("updated", scheduleNext);
      slider.on("destroyed", () => {
        if (animationFrameId) {
          cancelAnimationFrame(animationFrameId);
        }
      });
    },
    []
  );

  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      renderMode: "performance",
      drag: false,
      slides: { perView: 4, spacing: 24 },
      defaultAnimation: {
        duration: SLIDE_DURATION,
        easing: (t) => t,
      },
      breakpoints: {
        "(max-width: 992px)": {
          slides: { perView: 3, spacing: 20 },
        },
        "(max-width: 768px)": {
          slides: { perView: 2.5, spacing: 16 },
        },
        "(max-width: 576px)": {
          slides: { perView: 1.75, spacing: 12 },
        },
      },
    },
    [autoScroll]
  );

  return (
    <section
      id="universities"
      className="partners-section py-4 bg-white scroll-target"
      aria-label="Partner universities"
    >
      <div className="container">
        <div ref={sliderRef} className="keen-slider partner-slider">
          {sliderUniversities.map((partner, index) => (
            <div className="keen-slider__slide" key={`${partner.name}-${index}`}>
              <div className="partner-logo-tile">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="partner-logo-img"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerUniversitiesSlider;
