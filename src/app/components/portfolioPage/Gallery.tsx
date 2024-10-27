export interface Image {
  desktop: string;
  table: string;
  mobile: string;
  alt: string;
}

export interface Card {
  id: number;
  link: string;
  image: Image;
  title: string;
  category: string;
  description?: string;
}

export interface GalleryProps {
  cards: Card[];
  activeFilter: string;
}

const Gallery: React.FC<GalleryProps> = ({ cards, activeFilter }) => {
  return (
    <ul className="card-set">
      {cards
        .filter(
          (item) => activeFilter === 'All' || item.category === activeFilter,
        )
        .map((card) => (
          <li key={card.id} className="card-set__item">
            <a
              href={card.link}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="card-set__link"
            >
              <div className="graphic-content">
                <picture>
                  <source
                    srcSet={`
                          ${card.image.desktop} 1x,
                          ${card.image.desktop.replace('.jpg', '@2x.jpg')} 2x,
                          ${card.image.desktop.replace('.jpg', '@3x.jpg')} 3x
                        `}
                    media="(min-width: 1200px)"
                  />
                  <source
                    srcSet={`
                          ${card.image.table} 1x,
                          ${card.image.table.replace('.jpg', '@2x.jpg')} 2x,
                          ${card.image.table.replace('.jpg', '@3x.jpg')} 3x
                        `}
                    media="(min-width: 768px)"
                  />
                  <source
                    srcSet={`
                          ${card.image.mobile} 1x,
                          ${card.image.mobile.replace('.jpg', '@2x.jpg')} 2x,
                          ${card.image.mobile.replace('.jpg', '@3x.jpg')} 3x
                        `}
                    media="(min-width: 320px)"
                  />
                  <img
                    className="graphic-content__img"
                    src={card.image.mobile}
                    alt={card.image.alt}
                    width="370"
                  />
                </picture>

                <div className="overflow">
                  <p className="graphic-content__img-overflow">
                    {card.description}
                  </p>
                </div>
              </div>
              <div className="text-content">
                <h2 className="text-content__title">{card.title}</h2>
                <p className="text-content__text">{card.category}</p>
              </div>
            </a>
          </li>
        ))}
    </ul>
  );
};

export default Gallery;
