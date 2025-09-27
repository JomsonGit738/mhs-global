import { memo } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

type NetworkLocation = {
  name: string;
  flag: string;
  coordinates: [number, number];
  labelOffset?: { x: number; y: number };
};

const networkLocations: NetworkLocation[] = [
  {
    name: "Canada",
    flag: "\u{1F1E8}\u{1F1E6}",
    coordinates: [-95, 58],
    labelOffset: { x: 16, y: -18 },
  },
  {
    name: "United States",
    flag: "\u{1F1FA}\u{1F1F8}",
    coordinates: [-100, 38],
    labelOffset: { x: 18, y: 26 },
  },
  {
    name: "United Kingdom",
    flag: "\u{1F1EC}\u{1F1E7}",
    coordinates: [-1.5, 52],
    labelOffset: { x: 38, y: -18 },
  },
  {
    name: "Spain",
    flag: "\u{1F1EA}\u{1F1F8}",
    coordinates: [-3.7, 40.4],
    labelOffset: { x: 32, y: 12 },
  },
  {
    name: "United Arab Emirates",
    flag: "\u{1F1E6}\u{1F1EA}",
    coordinates: [54.4, 24.3],
    labelOffset: { x: 28, y: 12 },
  },
  {
    name: "Singapore",
    flag: "\u{1F1F8}\u{1F1EC}",
    coordinates: [103.8, 1.35],
    labelOffset: { x: 32, y: -12 },
  },
  {
    name: "Malaysia",
    flag: "\u{1F1F2}\u{1F1FE}",
    coordinates: [102.0, 4.2],
    labelOffset: { x: -10, y: 30 },
  },
  {
    name: "Australia",
    flag: "\u{1F1E6}\u{1F1FA}",
    coordinates: [134.5, -25.3],
    labelOffset: { x: 0, y: 34 },
  },
];

const overlayHighlights = [
  "11+ destination countries with on-ground support",
  "Priority application processing & scholarship guidance",
  "Dedicated visa advisory and post-arrival mentoring",
];

const GlobalNetworkSection = (): JSX.Element => {
  return (
    <section className="network-section py-lg-6" id="about">
      <div className="container-fluid px-0">
        <div className="network-map-card position-relative">
          <div className="network-overlay text-white">
            <span className="badge bg-white text-primary-emphasis mb-3">
              Our Global Network
            </span>
            <h2 className="fw-bold mb-3 text-white">
              Explore academic opportunities across continents
            </h2>
            <p className="mb-4 text-white-50">
              We partner with world-ranked universities to open doors to
              specialised programs, scholarship pathways, and international
              career launchpads.
            </p>
            <ul className="list-unstyled d-grid gap-2 network-overlay-list">
              {overlayHighlights.map((item) => (
                <li key={item} className="d-flex align-items-start gap-2">
                  <span className="network-bullet"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="network-map-shell">
            <ComposableMap
              projection="geoMercator"
              projectionConfig={{ scale: 150, center: [12, 20] }}
              style={{ width: "100%", height: "100%" }}
            >
              <defs>
                <linearGradient
                  id="oceanGradient"
                  x1="0%"
                  y1="0%"
                  x2="0%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#cfe4ff" />
                  <stop offset="100%" stopColor="#eaf3ff" />
                </linearGradient>
                <radialGradient id="markerGradient" cx="50%" cy="35%" r="65%">
                  <stop offset="0%" stopColor="#69a5ff" />
                  <stop offset="100%" stopColor="#1f6ff2" />
                </radialGradient>
              </defs>
              <rect
                x={0}
                y={0}
                width="100%"
                height="100%"
                fill="url(#oceanGradient)"
              />
              <Geographies geography={geoUrl}>
                {({ geographies }: { geographies: any[] }) =>
                  geographies
                    .filter(
                      (geo: any) => geo?.properties?.NAME !== "Antarctica"
                    )
                    .map((geo: any) => (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        fill="#8fb8ff"
                        stroke="#ffffff"
                        strokeWidth={0.35}
                        style={{
                          default: { outline: "none" },
                          hover: { outline: "none", fill: "#6da4ff" },
                          pressed: { outline: "none" },
                        }}
                      />
                    ))
                }
              </Geographies>
              {networkLocations.map((location) => {
                const offset = location.labelOffset ?? { x: 0, y: -18 };
                return (
                  <Marker
                    key={location.name}
                    coordinates={location.coordinates}
                  >
                    <g className="network-marker">
                      <circle className="marker-outer" r={14}></circle>
                      <circle className="marker-inner" r={8}></circle>
                      <text
                        className="network-marker-flag"
                        textAnchor="middle"
                        dominantBaseline="central"
                      >
                        {location.flag}
                      </text>
                    </g>
                    <text
                      className="network-marker-label"
                      textAnchor="middle"
                      x={offset.x}
                      y={offset.y}
                    >
                      {location.name}
                    </text>
                  </Marker>
                );
              })}
            </ComposableMap>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(GlobalNetworkSection);
