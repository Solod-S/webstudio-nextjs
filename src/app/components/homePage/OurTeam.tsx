import React from 'react';

interface Image {
  webp: {
    desktop: string;
    table: string;
    mobile: string;
  };
  jpg: {
    desktop: string;
    table: string;
    mobile: string;
  };
  alt: string;
}

interface SocialMedia {
  facebook?: string;
  twitter?: string;
  linkedin?: string;
}

interface TeamMemberProps {
  member: {
    name: string;
    role: string;
    image: Image;
    social?: SocialMedia;
  };
}

const teamMembers = [
  {
    name: 'Igor Demyanenko',
    role: 'Product Designer',
    image: {
      webp: {
        desktop: '/images/igor-desktop.webp',
        table: '/images/igor-table.webp',
        mobile: '/images/igor-mobile.webp',
      },
      jpg: {
        desktop: '/images/igor-desktop.jpg',
        table: '/images/igor-table.jpg',
        mobile: '/images/igor-mobile.jpg',
      },
      alt: 'Igor',
    },
  },
  {
    name: 'Olga Repina',
    role: 'Frontend Developer',
    image: {
      webp: {
        desktop: '/images/olga-desktop.webp',
        table: '/images/olga-table.webp',
        mobile: '/images/olga-mobile.webp',
      },
      jpg: {
        desktop: '/images/olga-desktop.jpg',
        table: '/images/olga-table.jpg',
        mobile: '/images/olga-mobile.jpg',
      },
      alt: 'Olga',
    },
  },
  {
    name: 'Nikolay',
    role: 'Backend Developer',
    image: {
      webp: {
        desktop: '/images/nikola-desktop.webp',
        table: '/images/nikola-table.webp',
        mobile: '/images/nikola-mobile.webp',
      },
      jpg: {
        desktop: '/images/nikola-desktop.jpg',
        table: '/images/nikola-table.jpg',
        mobile: '/images/nikola-mobile.jpg',
      },
      alt: 'Nikolay',
    },
  },
  {
    name: 'Mihail',
    role: 'UI Designer',
    image: {
      webp: {
        desktop: '/images/mihail-desktop.webp',
        table: '/images/mihail-table.webp',
        mobile: '/images/mihail-mobile.webp',
      },
      jpg: {
        desktop: '/images/mihail-desktop.jpg',
        table: '/images/mihail-table.jpg',
        mobile: '/images/mihail-mobile.jpg',
      },
      alt: 'Mihail',
    },
  },
];

function Social() {
  const socialLinks = [
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/',
      icon: 'icon-instagram',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/?lang=ru',
      icon: 'icon-twitter',
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/',
      icon: 'icon-facebook',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/',
      icon: 'icon-linkedin',
    },
  ];

  return (
    <ul className="social">
      {socialLinks.map((link, index) => (
        <li className="social__item" key={index}>
          <a
            className="social__link"
            href={link.url}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <svg width="20px" height="20px" aria-label={link.name}>
              <use href={`/images/symbol-defs.svg#${link.icon}`}></use>
            </svg>
          </a>
        </li>
      ))}
    </ul>
  );
}

const TeamMember: React.FC<TeamMemberProps> = ({ member }) => {
  return (
    <li className="team__member-item">
      <div className="avatar">
        <picture>
          <source
            srcSet={`
            ${member.image.webp.desktop} 1x,
            ${member.image.webp.desktop.replace('.webp', '@2x.webp')} 2x,
            ${member.image.webp.desktop.replace('.webp', '@3x.webp')} 3x
          `}
            media="(min-width: 1200px)"
            type="image/webp"
          />
          <source
            srcSet={`
            ${member.image.webp.table} 1x,
            ${member.image.webp.table.replace('.webp', '@2x.webp')} 2x,
            ${member.image.webp.table.replace('.webp', '@3x.webp')} 3x
          `}
            media="(min-width: 768px)"
            type="image/webp"
          />
          <source
            srcSet={`
            ${member.image.webp.mobile} 1x,
            ${member.image.webp.mobile.replace('.webp', '@2x.webp')} 2x,
            ${member.image.webp.mobile.replace('.webp', '@3x.webp')} 3x
          `}
            media="(min-width: 320px)"
            type="image/webp"
          />
          <source
            srcSet={`
            ${member.image.jpg.desktop} 1x,
            ${member.image.jpg.desktop.replace('.jpg', '@2x.jpg')} 2x,
            ${member.image.jpg.desktop.replace('.jpg', '@3x.jpg')} 3x
          `}
            media="(min-width: 1200px)"
          />
          <source
            srcSet={`
            ${member.image.jpg.table} 1x,
            ${member.image.jpg.table.replace('.jpg', '@2x.jpg')} 2x,
            ${member.image.jpg.table.replace('.jpg', '@3x.jpg')} 3x
          `}
            media="(min-width: 768px)"
          />
          <source
            srcSet={`
            ${member.image.jpg.mobile} 1x,
            ${member.image.jpg.mobile.replace('.jpg', '@2x.jpg')} 2x,
            ${member.image.jpg.mobile.replace('.jpg', '@3x.jpg')} 3x
          `}
            media="(min-width: 320px)"
          />
          <img
            className="avatar__img"
            src={member.image.jpg.mobile.replace('.jpg', '@3x.jpg')}
            alt={member.image.alt}
            width="270"
          />
        </picture>
        <picture>
          <source
            srcSet={`
            ${member.image.webp.desktop} 1x,
            ${member.image.webp.desktop.replace('.webp', '@2x.webp')} 2x,
            ${member.image.webp.desktop.replace('.webp', '@3x.webp')} 3x
          `}
            media="(min-width: 1200px)"
            type="image/webp"
          />
          <source
            srcSet={`
            ${member.image.webp.table} 1x,
            ${member.image.webp.table.replace('.webp', '@2x.webp')} 2x,
            ${member.image.webp.table.replace('.webp', '@3x.webp')} 3x
          `}
            media="(min-width: 768px)"
            type="image/webp"
          />
          <source
            srcSet={`
            ${member.image.webp.mobile} 1x,
            ${member.image.webp.mobile.replace('.webp', '@2x.webp')} 2x,
            ${member.image.webp.mobile.replace('.webp', '@3x.webp')} 3x
          `}
            media="(min-width: 320px)"
            type="image/webp"
          />
          <source
            srcSet={`
            ${member.image.jpg.desktop} 1x,
            ${member.image.jpg.desktop.replace('.jpg', '@2x.jpg')} 2x,
            ${member.image.jpg.desktop.replace('.jpg', '@3x.jpg')} 3x
          `}
            media="(min-width: 1200px)"
          />
          <source
            srcSet={`
            ${member.image.jpg.table} 1x,
            ${member.image.jpg.table.replace('.jpg', '@2x.jpg')} 2x,
            ${member.image.jpg.table.replace('.jpg', '@3x.jpg')} 3x
          `}
            media="(min-width: 768px)"
          />
          <source
            srcSet={`
            ${member.image.jpg.mobile} 1x,
            ${member.image.jpg.mobile.replace('.jpg', '@2x.jpg')} 2x,
            ${member.image.jpg.mobile.replace('.jpg', '@3x.jpg')} 3x
          `}
            media="(min-width: 320px)"
          />
          <img
            className="avatar__img--base"
            src={member.image.jpg.mobile.replace('.jpg', '@3x.jpg')}
            alt={member.image.alt}
            width="270"
          />
        </picture>
      </div>
      <div className="dscr">
        <h3 className="dscr__name">{member.name}</h3>
        <p className="dscr__text" lang="en">
          {member.role}
        </p>
        <Social />
      </div>
    </li>
  );
};

function OurTeam() {
  return (
    <section className="team section">
      <div className="container">
        <h2 className="team__title">Our team</h2>
        <ul className="team__member-list">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} member={member} />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default OurTeam;
