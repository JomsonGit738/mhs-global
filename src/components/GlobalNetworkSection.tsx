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
};

const networkLocations: NetworkLocation[] = [
  {
    name: "Canada",
    flag: "\u{1F1E8}\u{1F1E6}",
    coordinates: [-95, 58],
  },
  {
    name: "United States",
    flag: "\u{1F1FA}\u{1F1F8}",
    coordinates: [-100, 38],
  },
  {
    name: "United Kingdom",
    flag: "\u{1F1EC}\u{1F1E7}",
    coordinates: [-1.5, 52],
  },
  {
    name: "Spain",
    flag: "\u{1F1EA}\u{1F1F8}",
    coordinates: [-3.7, 40.4],
  },
  {
    name: "United Arab Emirates",
    flag: "\u{1F1E6}\u{1F1EA}",
    coordinates: [54.4, 24.3],
  },
  {
    name: "Singapore",
    flag: "\u{1F1F8}\u{1F1EC}",
    coordinates: [103.8, 1.35],
  },
  {
    name: "Malaysia",
    flag: "\u{1F1F2}\u{1F1FE}",
    coordinates: [102.0, 4.2],
  },
  {
    name: "Australia",
    flag: "\u{1F1E6}\u{1F1FA}",
    coordinates: [134.5, -25.3],
  },
];

// const overlayHighlights = [
//   "11+ destination countries with on-ground support",
//   "Priority application processing & scholarship guidance",
//   "Dedicated visa advisory and post-arrival mentoring",
// ];

const GlobalNetworkSection = (): JSX.Element => {
  const pinScale = 0.6;
  const pinTranslateY = -28;
  const pinTopY = (-20 + pinTranslateY) * pinScale;
  const tooltipHeight = 24;
  const tooltipRadius = tooltipHeight / 2;
  const tooltipGap = 10;
  const tooltipOffsetY = pinTopY - tooltipGap;

  return (
    <section className="network-section" id="about">
      <div className="container-fluid px-0">
        <div className="network-map-card position-relative">
          <div className="network-map-shell">
            <ComposableMap
              projection="geoMercator"
              projectionConfig={{ scale: 150, center: [12, 20] }}
              style={{ width: "100%", height: "100%" }}
            >
              <defs>
                <radialGradient id="markerGradient" cx="50%" cy="35%" r="65%">
                  <stop offset="0%" stop-color="darkred" />
                  <stop offset="100%" stop-color="red" />
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
                const tooltipWidth = Math.max(96, location.name.length * 7);

                return (
                  <Marker
                    key={location.name}
                    coordinates={location.coordinates}
                  >
                    <g
                      className="network-marker"
                      role="img"
                      aria-label={`${location.name} location`}
                      tabIndex={0}
                    >
                      <title>{location.name}</title>

                      <g
                        className="network-marker-pin-group"
                        transform={`scale(${pinScale}) translate(0, ${pinTranslateY})`}
                      >
                        <path
                          className="network-marker-pin"
                          d="M0 -20 C9 -20 16 -12 16 -3 C16 8 6 17 0 28 C-6 17 -16 8 -16 -3 C-16 -12 -9 -20 0 -20 Z"
                        />
                      </g>
                      <g
                        className="network-marker-tooltip"
                        transform={`translate(0, ${tooltipOffsetY})`}
                        aria-hidden="true"
                      >
                        <g className="network-marker-tooltip-body">
                          <rect
                            className="network-marker-tooltip-bg"
                            x={-tooltipWidth / 2}
                            y={-tooltipHeight}
                            width={tooltipWidth}
                            height={tooltipHeight}
                            rx={tooltipRadius}
                            ry={tooltipRadius}
                          />
                          <text
                            className="network-marker-tooltip-label"
                            textAnchor="middle"
                            dominantBaseline="central"
                            y={-tooltipHeight / 2}
                          >
                            {location.name}
                          </text>
                        </g>
                      </g>
                    </g>
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
