interface HeroProps {
  openModal: () => void;
}

function Hero({ openModal }: HeroProps) {
  return (
    <section className="hero-contact">
      <h1 className="hero-contact__title">
        Design development <br />
        from scratch
      </h1>

      <video
        className="hero-contact__video"
        src="/video/video_hero.mp4"
        autoPlay
        muted
        loop
        // type="video/mp4"
      ></video>

      <button
        className="hero-contact__button"
        data-modal-open
        onClick={openModal}
      >
        Place an order
      </button>
    </section>
  );
}

export default Hero;
