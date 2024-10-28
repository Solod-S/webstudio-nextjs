function Hero() {
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

      <button className="hero-contact__button" data-modal-open>
        Place an order
      </button>
    </section>
  );
}

export default Hero;
