'use client';

interface Image {
  desktop: string;
  table: string;
  mobile: string;
  alt: string;
}

interface Card {
  id: number;
  link: string;
  image: Image;
  title: string;
  category: string;
  description?: string;
}

const cards: Card[] = [
  {
    id: 1,
    image: {
      desktop: './images/technocrack-desktop.jpg ',
      table: './images/technocrack-desktop.jpg',
      mobile: './images/technocrack-mobile.jpg',
      alt: 'Technoquack',
    },
    link: 'https://google.com/',
    title: 'Technoquack',
    category: 'Web-site',
    description:
      'The resource offers comprehensive offers with different levels of functionality and services. All this will allow the visitor to obtain comprehensive information about company or individual.',
  },
  {
    id: 2,
    image: {
      desktop: './images/new-orlean-vs-desktop.jpg ',
      table: './images/new-orlean-vs-desktop.jpg',
      mobile: './images/new-orlean-vs-mobile.jpg',
      alt: 'New Orlean vs Golden Star',
    },
    link: 'https://google.com/',
    title: 'New Orlean vs Golden Star',
    category: 'Design',
    description:
      'The resource offers comprehensive offers with different levels of functionality and services. All this will allow the visitor to obtain comprehensive information about company or individual.',
  },
  {
    id: 3,
    image: {
      desktop: './images/seafood-desktop.jpg ',
      table: './images/seafood-desktop.jpg',
      mobile: './images/seafood-mobile.jpg',
      alt: 'Restaurant Seafood',
    },
    link: 'https://google.com/',
    title: 'Restaurant Seafood',
    category: 'App',
    description:
      'The resource offers comprehensive offers with different levels of functionality and services. All this will allow the visitor to obtain comprehensive information about company or individual.',
  },
  {
    id: 4,
    image: {
      desktop: './images/prime-desktop.jpg ',
      table: './images/prime-desktop.jpg',
      mobile: './images/prime-mobile.jpg',
      alt: 'headphones',
    },
    link: 'https://google.com/',
    title: 'Project Prime',
    category: 'Marketing',
    description:
      'The resource offers comprehensive offers with different levels of functionality and services. All this will allow the visitor to obtain comprehensive information about company or individual.',
  },
  {
    id: 5,
    image: {
      desktop: './images/boxes-desktop.jpg ',
      table: './images/boxes-desktop.jpg',
      mobile: './images/boxes-mobile.jpg',
      alt: 'boxes',
    },
    link: 'https://google.com/',
    title: 'Project Boxes',
    category: 'App',
    description:
      'The resource offers comprehensive offers with different levels of functionality and services. All this will allow the visitor to obtain comprehensive information about company or individual.',
  },
  {
    id: 6,
    image: {
      desktop: './images/inspiration-has-no-borders-desktop.jpg ',
      table: './images/inspiration-has-no-borders-desktop.jpg',
      mobile: './images/inspiration-has-no-borders-mobile.jpg',
      alt: 'site',
    },
    link: 'https://google.com/',
    title: 'Inspiration has no Borders',
    category: 'Web-site',
    description:
      'The resource offers comprehensive offers with different levels of functionality and services. All this will allow the visitor to obtain comprehensive information about company or individual.',
  },
  {
    id: 7,
    image: {
      desktop: './images/limited-edition-desktop.jpg ',
      table: './images/limited-edition-desktop.jpg',
      mobile: './images/limited-edition-mobile.jpg',
      alt: 'limited edition',
    },
    link: 'https://google.com/',
    title: 'Limited Edition',
    category: 'Design',
    description:
      'The resource offers comprehensive offers with different levels of functionality and services. All this will allow the visitor to obtain comprehensive information about company or individual.',
  },
  {
    id: 8,
    image: {
      desktop: './images/lab-desktop.jpg ',
      table: './images/lab-desktop.jpg',
      mobile: './images/lab-mobile.jpg',
      alt: 'Project LAB',
    },
    link: 'https://google.com/',
    title: 'Project LAB',
    category: 'Marketing',
    description:
      'The resource offers comprehensive offers with different levels of functionality and services. All this will allow the visitor to obtain comprehensive information about company or individual.',
  },
  {
    id: 9,
    image: {
      desktop: './images/growing-business-desktop.jpg ',
      table: './images/growing-business-desktop.jpg',
      mobile: './images/growing-business-mobile.jpg',
      alt: 'Growing Business',
    },
    link: 'https://google.com/',
    title: 'Growing Business',
    category: 'App',
    description:
      'The resource offers comprehensive offers with different levels of functionality and services. All this will allow the visitor to obtain comprehensive information about company or individual.',
  },
];

interface GalleryProps {
  cards: Card[];
}

const Gallery: React.FC<GalleryProps> = ({ cards }) => {
  return (
    <ul className="card-set">
      {cards.map((card) => (
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

function Portfolio() {
  return (
    <section className="section portfolio">
      <div className="container">
        <h1 className="--visually-hidden">Portfolio</h1>
        <ul className="buttons-set">
          <li className="buttons-set__item">
            <button
              className="buttons-set__button"
              type="button"
              data-filter="all"
            >
              All
            </button>
          </li>
          <li className="buttons-set__item">
            <button
              className="buttons-set__button"
              type="button"
              data-filter="web-site"
            >
              Web-sites
            </button>
          </li>
          <li className="buttons-set__item">
            <button
              className="buttons-set__button"
              type="button"
              data-filter="app"
            >
              Applications
            </button>
          </li>
          <li className="buttons-set__item">
            <button
              className="buttons-set__button"
              type="button"
              data-filter="design"
            >
              Design
            </button>
          </li>
          <li className="buttons-set__item">
            <button
              className="buttons-set__button"
              type="button"
              data-filter="marketing"
            >
              Marketing
            </button>
          </li>
        </ul>
        <Gallery cards={cards} />
      </div>
    </section>
  );
}

export default Portfolio;
