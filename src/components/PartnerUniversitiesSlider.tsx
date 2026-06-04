import PartnerUniversitiesSliderBody from "./PartnerUniversitiesSliderBody";

const PartnerUniversitiesSlider = (): JSX.Element => {
  return (
    <section
      id="universities"
      className="partners-section py-4 bg-white scroll-target"
      aria-label="Partner universities"
    >
      <div className="container">
        <PartnerUniversitiesSliderBody />
      </div>
    </section>
  );
};

export default PartnerUniversitiesSlider;
