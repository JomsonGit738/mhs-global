import { Suspense, lazy } from "react";
import DeferredRender from "./DeferredRender";
import { lazyWithRetry } from "../utils/lazyWithRetry";

const PartnerUniversitiesSliderBody = lazy(
  () => lazyWithRetry(() => import("./PartnerUniversitiesSliderBody"))
);

const PartnerUniversitiesSlider = (): JSX.Element => {
  return (
    <section
      id="universities"
      className="partners-section py-4 bg-white scroll-target"
      aria-label="Partner universities"
    >
      <div className="container">
        <DeferredRender minHeight="10rem">
          <Suspense fallback={null}>
            <PartnerUniversitiesSliderBody />
          </Suspense>
        </DeferredRender>
      </div>
    </section>
  );
};

export default PartnerUniversitiesSlider;
