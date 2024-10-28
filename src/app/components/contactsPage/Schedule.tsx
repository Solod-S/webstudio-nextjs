function Schedule() {
  return (
    <section className="location section">
      <div className="container">
        <h2 className="location__title">We are located:</h2>
        <iframe
          className="location__google-link"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2541.7794497406567!2d30.5383858!3d50.426580699999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf0e033ecbe9%3A0x57a4dffefec77da0!2z0LHRg9C7LiDQm9C10YHQuCDQo9C60YDQsNC40L3QutC4LCAyNiwg0JrQuNC10LIsIDAyMDAw!5e0!3m2!1sru!2sua!4v1666193649923!5m2!1sru!2sua"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <h3 className="location__working-time">
          Working Hours: 9 AM to 7 PM, Seven Days a Week
        </h3>
        <h3 className="location__working-contacts">Our Contact</h3>
        <div className="location__contacts-wrapper">
          <a
            className="navigation__link-contacts --mobile-modificator --inLocation"
            href="tel:+380961111111"
          >
            <svg
              className="navigation__icon navigation__icon--tablet-tell"
              width="10px"
              height="16px"
              aria-label="Phone"
            >
              <use href="./images/symbol-defs.svg#icon-tellto"></use>
            </svg>
            +38 096 111 11 11
          </a>
          <a
            className="navigation__link-contacts --inLocation"
            href="mailto:info@devstudio.com"
          >
            <svg
              className="navigation__icon navigation__icon--tablet-mail"
              width="16px"
              height="12px"
              aria-label="Email"
            >
              <use href="./images/symbol-defs.svg#icon-mailto"></use>
            </svg>
            info@devstudio.com
          </a>
        </div>
      </div>
    </section>
  );
}

export default Schedule;
