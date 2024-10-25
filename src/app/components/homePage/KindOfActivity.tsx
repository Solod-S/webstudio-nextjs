const activities = [
  {
    title: 'Desktop Applications',
    imgSrc: '/images/box_1',
    alt: 'coding',
  },
  {
    title: 'Mobile Applications',
    imgSrc: '/images/box_2',
    alt: 'mobile',
  },
  {
    title: 'Design Solutions',
    imgSrc: '/images/box_3',
    alt: 'design',
  },
];

function KindOfActivity() {
  return (
    <section className="characteristic section">
      <div className="characteristic__wrapper container">
        <h2 className="characteristic__title">What are we doing</h2>
        <ul className="characteristic__list">
          {activities.map((activity, index) => (
            <li className="characteristic__item" key={index}>
              <picture>
                <source
                  srcSet={`${activity.imgSrc}.webp 1x, ${activity.imgSrc}@2x.webp 2x, ${activity.imgSrc}@3x.webp 3x`}
                  media="(min-width: 1200px)"
                  type="image/webp"
                />
                <source
                  srcSet={`${activity.imgSrc}.webp 1x, ${activity.imgSrc}@2x.webp 2x, ${activity.imgSrc}@3x.webp 3x`}
                  media="(min-width: 320px)"
                  type="image/webp"
                />
                <source
                  srcSet={`${activity.imgSrc}.jpg 1x, ${activity.imgSrc}@2x.jpg 2x, ${activity.imgSrc}@3x.jpg 3x`}
                  media="(min-width: 1200px)"
                />
                <img
                  className="characteristic__img"
                  src={`${activity.imgSrc}@3x.jpg`}
                  alt={activity.alt}
                  width="370"
                />
              </picture>
              <p className="characteristic__text">{activity.title}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default KindOfActivity;
