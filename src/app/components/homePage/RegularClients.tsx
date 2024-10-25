const clients = [
  {
    name: 'Company 1',
    icon: 'company-1',
    link: 'https://google.com/',
    width: '41px',
    height: '47px',
  },
  {
    name: 'Company 2',
    icon: 'company-2',
    link: 'https://google.com/',
    width: '40px',
    height: '52px',
  },
  {
    name: 'Company 3',
    icon: 'company-3',
    link: 'https://google.com/',
    width: '45px',
    height: '42px',
  },
  {
    name: 'Company 4',
    icon: 'company-4',
    link: 'https://google.com/',
    width: '70px',
    height: '41px',
  },
  {
    name: 'Company 5',
    icon: 'company-5',
    link: 'https://google.com/',
    width: '63px',
    height: '46px',
  },
  {
    name: 'Company 6',
    icon: 'company-6',
    link: 'https://google.com/',
    width: '94px',
    height: '44px',
  },
];

function RegularClients() {
  return (
    <section className="section clients">
      <div className="container clients__wrapper">
        <p className="clients__title">Regular clients</p>
        <ul className="clients__list">
          {clients.map((client, index) => (
            <li className="clients__item" key={index}>
              <a
                className="clients__link"
                href={client.link}
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                <svg
                  className="clients__icon"
                  width={client.width}
                  height={client.height}
                  aria-label={client.name}
                >
                  <use
                    href={`./images/symbol-defs.svg#icon-${client.icon}`}
                  ></use>
                </svg>
                <svg
                  className="clients__icon clients__icon--backview"
                  width={client.width}
                  height={client.height}
                  aria-label={client.name}
                >
                  <use
                    href={`./images/symbol-defs.svg#icon-${client.icon}`}
                  ></use>
                </svg>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default RegularClients;
