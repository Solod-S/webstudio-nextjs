interface HeroProps {
  openModal: () => void;
}

function Hero({ openModal }: HeroProps) {
  return (
    <section className="hero">
      <h1 className="hero__title">
        EFFECTIVE SOLUTIONS <br />
        FOR YOUR BUSINESS
      </h1>
      <button className="hero__button" data-modal-open onClick={openModal}>
        Place an order
      </button>
    </section>
  );
}

export default Hero;
