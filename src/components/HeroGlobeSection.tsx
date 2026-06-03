import { useEffect, useMemo, useRef, useState } from "react";
import createGlobe, { type Globe } from "cobe";
import { Link, useNavigate } from "react-router-dom";
import { studyDestinations } from "../data/studyDestinations";
import { getCurrentHeroIntakeTitle } from "../utils/intakeMessaging";
import "./HeroGlobeSection.css";

type GlobeDestinationConfig = {
  location: [number, number];
  anchorLabel: string;
};

const globeDestinationCoordinates: Record<string, GlobeDestinationConfig> = {
  // Exact anchor positions use capital or primary city coordinates for each study destination.
  ireland: {
    location: [53.3498, -6.2603],
    anchorLabel: "Dublin",
  },
  uk: {
    location: [51.5072, -0.1276],
    anchorLabel: "London",
  },
  usa: {
    location: [38.9072, -77.0369],
    anchorLabel: "Washington, D.C.",
  },
  canada: {
    location: [45.4215, -75.6972],
    anchorLabel: "Ottawa",
  },
  uae: {
    location: [25.2048, 55.2708],
    anchorLabel: "Dubai",
  },
  france: {
    location: [48.8566, 2.3522],
    anchorLabel: "Paris",
  },
  germany: {
    location: [52.52, 13.405],
    anchorLabel: "Berlin",
  },
  spain: {
    location: [40.4168, -3.7038],
    anchorLabel: "Madrid",
  },
  malta: {
    location: [35.8989, 14.5146],
    anchorLabel: "Valletta",
  },
  australia: {
    location: [-35.2809, 149.13],
    anchorLabel: "Canberra",
  },
};

const globeDestinations = studyDestinations
  .map((destination) => {
    const config = globeDestinationCoordinates[destination.id];
    if (!config) {
      return null;
    }

    return {
      id: destination.id,
      country: destination.country,
      href: destination.href,
      markerId: `destination-${destination.id}`,
      location: config.location,
      anchorLabel: config.anchorLabel,
    };
  })
  .filter(
    (
      destination
    ): destination is {
      id: string;
      country: string;
      href: string;
      markerId: string;
      location: [number, number];
      anchorLabel: string;
    } => Boolean(destination)
  );

const GLOBE_SCALE = 1;
const GLOBE_MARKER_ELEVATION = 0.02;
const GLOBE_RADIUS = 0.8 + GLOBE_MARKER_ELEVATION;
const GLOBE_THETA = 0.28;
const GLOBE_ROTATION_SPEED = 0.0022;
const HERO_COPY_ROTATION_INTERVAL = 8000;

type HeroCopySlide = {
  id: string;
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
};

const heroCopySlidesTemplate: HeroCopySlide[] = [
  {
    id: "apply-now",
    title: "",
    description:
      "Start your international education journey and secure your place before deadlines close.",
    ctaLabel: "Apply Now",
    ctaHref: "/contact#contact-form",
  },
  {
    id: "scholarships-guidance",
    title: "Scholarship Guidance",
    description:
      "Explore funding opportunities and personalized advice to make your studies more affordable.",
    ctaLabel: "Explore Scholarships",
    ctaHref: "/student-services#scholarship-guidance",
  },
  {
    id: "book-consultation",
    title: "Book a Consultation",
    description:
      "Get expert one-on-one guidance to choose the right course, university, and country for you.",
    ctaLabel: "Book a Session",
    ctaHref: "/about#consultation-form",
  },
  {
    id: "partner-universities",
    title: "Our Partner Universities",
    description:
      "Access a global network of trusted universities offering diverse programs and pathways.",
    ctaLabel: "View Partners",
    ctaHref: "/#universities",
  },
];

const toCartesian = ([lat, lon]: [number, number]): [number, number, number] => {
  const latRad = (lat * Math.PI) / 180;
  const lonRad = (lon * Math.PI) / 180 - Math.PI;
  const cosLat = Math.cos(latRad);

  return [-cosLat * Math.cos(lonRad), Math.sin(latRad), cosLat * Math.sin(lonRad)];
};

const HeroGlobeSection = (): JSX.Element => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const stageRef = useRef<HTMLDivElement | null>(null);
  const globeRef = useRef<Globe | null>(null);
  const frameRef = useRef<number | null>(null);
  const intersectionObserverRef = useRef<IntersectionObserver | null>(null);
  const resizeObserverRef = useRef<ResizeObserver | null>(null);
  const labelRefs = useRef<Record<string, HTMLSpanElement | null>>({});
  const navigate = useNavigate();
  const [activeCopyIndex, setActiveCopyIndex] = useState(0);
  const heroCopySlides = useMemo<HeroCopySlide[]>(
    () => [
      {
        ...heroCopySlidesTemplate[0],
        title: getCurrentHeroIntakeTitle(new Date()),
      },
      ...heroCopySlidesTemplate.slice(1),
    ],
    []
  );

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveCopyIndex((currentIndex) => (currentIndex + 1) % heroCopySlides.length);
    }, HERO_COPY_ROTATION_INTERVAL);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [heroCopySlides.length]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const stage = stageRef.current;
    if (!canvas || !stage) {
      return;
    }

    let phi = 0;
    let isVisible = true;

    const updateLabelPositions = (nextPhi: number) => {
      const canvasRect = canvas.getBoundingClientRect();
      const stageRect = stage.getBoundingClientRect();
      const width = canvasRect.width;
      const height = canvasRect.height;

      if (!width || !height) {
        return;
      }

      const thetaCos = Math.cos(GLOBE_THETA);
      const thetaSin = Math.sin(GLOBE_THETA);
      const phiCos = Math.cos(nextPhi);
      const phiSin = Math.sin(nextPhi);
      const scale = GLOBE_SCALE;

      for (const destination of globeDestinations) {
        const label = labelRefs.current[destination.id];
        if (!label) {
          continue;
        }

        const [x, y, z] = toCartesian(destination.location);
        const rotatedX = phiCos * x + phiSin * z;
        const rotatedY = phiSin * thetaSin * x + thetaCos * y - phiCos * thetaSin * z;
        const visible =
          -phiSin * thetaCos * x + thetaSin * y + phiCos * thetaCos * z >= 0 ||
          rotatedX * rotatedX + rotatedY * rotatedY >= 0.64;

        if (!visible) {
          label.style.opacity = "0";
          label.style.pointerEvents = "none";
          continue;
        }

        const projectedX = ((rotatedX * GLOBE_RADIUS) / (width / height) * scale + 1) / 2;
        const projectedY = (-rotatedY * GLOBE_RADIUS * scale + 1) / 2;

        label.style.left = `${canvasRect.left - stageRect.left + projectedX * width}px`;
        label.style.top = `${canvasRect.top - stageRect.top + projectedY * height}px`;
        label.style.opacity = "1";
        label.style.pointerEvents = "auto";
      }
    };

    const mountGlobe = () => {
      const { width } = canvas.getBoundingClientRect();
      if (!width) {
        return;
      }

      globeRef.current?.destroy();

      globeRef.current = createGlobe(canvas, {
        devicePixelRatio: Math.min(window.devicePixelRatio, 2),
        width: width * 2,
        height: width * 2,
        phi,
        theta: GLOBE_THETA,
        dark: 0,
        diffuse: 1.25,
        mapSamples: 18000,
        mapBrightness: 5.5,
        mapBaseBrightness: 0.18,
        baseColor: [0.9, 0.95, 1],
        markerColor: [0.13, 0.42, 0.95],
        glowColor: [0.77, 0.88, 1],
        markers: globeDestinations.map((destination) => ({
          location: destination.location,
          size: 0.03,
          id: destination.markerId,
        })),
        markerElevation: 0.02,
        opacity: 0.95,
      });

      updateLabelPositions(phi);
    };

    const animate = () => {
      phi += GLOBE_ROTATION_SPEED;
      globeRef.current?.update({ phi });
      updateLabelPositions(phi);
      frameRef.current = window.requestAnimationFrame(animate);
    };

    const stopAnimation = () => {
      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
        frameRef.current = null;
      }
    };

    const startAnimation = () => {
      if (frameRef.current !== null || !isVisible) {
        return;
      }

      frameRef.current = window.requestAnimationFrame(animate);
    };

    mountGlobe();
    startAnimation();

    intersectionObserverRef.current = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;

        if (isVisible) {
          startAnimation();
          return;
        }

        stopAnimation();
      },
      {
        threshold: 0.15,
      }
    );
    intersectionObserverRef.current.observe(stage);

    resizeObserverRef.current = new ResizeObserver(() => {
      mountGlobe();
    });
    resizeObserverRef.current.observe(canvas);

    return () => {
      stopAnimation();
      intersectionObserverRef.current?.disconnect();
      resizeObserverRef.current?.disconnect();
      globeRef.current?.destroy();
      globeRef.current = null;
    };
  }, []);

  const activeCopySlide = heroCopySlides[activeCopyIndex];

  return (
    <section className="hero-globe-section" aria-labelledby="hero-globe-title">
      <div className="container hero-globe-shell">
        <div className="row align-items-center g-4 g-xl-5">
          <div className="col-lg-6">
            <div className="hero-globe-copy">
              <span className="hero-globe-kicker">
                Global admissions guidance
              </span>
              <div key={activeCopySlide.id} className="hero-globe-copy-animated">
                <h1 id="hero-globe-title" className="hero-globe-title">
                  {activeCopySlide.title}
                </h1>
                <p className="hero-globe-description">
                  {activeCopySlide.description}
                </p>
                <button
                  type="button"
                  className="hero-globe-button"
                  onClick={() => navigate(activeCopySlide.ctaHref)}
                >
                  {activeCopySlide.ctaLabel}
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div ref={stageRef} className="hero-globe-stage">
              <div className="hero-globe-orbit hero-globe-orbit--large"></div>
              <div className="hero-globe-orbit hero-globe-orbit--small"></div>
              <canvas
                ref={canvasRef}
                className="hero-globe-canvas"
                style={{ width: 560, height: 560, maxWidth: "100%", aspectRatio: "1 / 1" }}
                aria-hidden="true"
              />
              <div className="hero-globe-label-layer">
                {globeDestinations.map((destination) => (
                  <Link
                    key={destination.id}
                    ref={(node) => {
                      labelRefs.current[destination.id] = node;
                    }}
                    className="hero-globe-label"
                    to={destination.href}
                    title={`${destination.country} (${destination.anchorLabel})`}
                    aria-label={`Study in ${destination.country}`}
                  >
                    {destination.country}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroGlobeSection;
