import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import { studyDestinations } from "../data/studyDestinations";

const SESSION_KEY = "mhs_home_destination_popup_seen";

const StudyDestinationPopup = (): JSX.Element | null => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const featuredDestination = useMemo(() => {
    const randomIndex = Math.floor(Math.random() * studyDestinations.length);
    return studyDestinations[randomIndex];
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const hasSeenPopup = window.sessionStorage.getItem(SESSION_KEY) === "true";
    if (!hasSeenPopup) {
      setIsOpen(true);
      window.sessionStorage.setItem(SESSION_KEY, "true");
    }
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  if (!isOpen || !featuredDestination) {
    return null;
  }

  const handleOpenDestination = () => {
    setIsOpen(false);
    navigate(featuredDestination.href);
  };

  return (
    <div
      className="destination-popup"
      role="presentation"
      onClick={() => setIsOpen(false)}
    >
      <div
        className="destination-popup__dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="destination-popup-title"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="destination-popup__close"
          onClick={() => setIsOpen(false)}
          aria-label="Close destination popup"
        >
          <i className="bi bi-x-lg"></i>
        </button>

        <div className="destination-popup__media">
          <img
            src={featuredDestination.image}
            alt={featuredDestination.imageAlt}
            className="destination-popup__image"
          />
        </div>

        <div className="destination-popup__content">
          <span className="destination-popup__eyebrow">
            Featured destination
          </span>
          <h2 id="destination-popup-title" className="destination-popup__title">
            {featuredDestination.name}
          </h2>
          <p className="destination-popup__summary">
            {featuredDestination.cardSummary}
          </p>
          <div className="destination-popup__intake">
            <span className="destination-popup__intake-label">Intakes</span>
            <span className="destination-popup__intake-value">
              {featuredDestination.cardFacts.find(
                (fact) => fact.label === "Intakes"
              )?.value ?? "Available now"}
            </span>
          </div>
          <div className="destination-popup__actions">
            <button
              type="button"
              className="destination-popup__primary"
              onClick={handleOpenDestination}
            >
              View destination details
            </button>
            <button
              type="button"
              className="destination-popup__secondary"
              onClick={() => setIsOpen(false)}
            >
              Maybe later
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudyDestinationPopup;
