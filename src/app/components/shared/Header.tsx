import React from 'react';
import Link from 'next/link';

import { RxHamburgerMenu } from 'react-icons/rx';
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathName = usePathname();
  console.log(`pathName`, pathName);
  return (
    <header>
      <div className="navigation container">
        <Link className="logo" href="/">
          <span className="logo--pre-color">Web</span>Studio
        </Link>
        <button
          className="mobile-btn"
          type="button"
          aria-expanded="false"
          data-menu-button
        >
          <RxHamburgerMenu size={30} />
          <svg
            className="mobile-btn__svg"
            width="40px"
            height="40px"
            aria-label="menu"
          >
            <use
              className="mobile-btn__icon-close"
              href="./images/symbol-defs.svg#icon-mobile-close"
            ></use>
            <use
              className="mobile-btn__icon-menu"
              href="./images/symbol-defs.svg#icon-mobile-menu"
            ></use>
          </svg>
        </button>
        <div className="navigation__menu-wrapper" data-menu>
          <nav className="navigation__menu">
            <ul className="navigation__list">
              <li className="navigation__item navigation__item--current-page-status">
                <Link
                  className={
                    pathName === '/'
                      ? 'navigation__link  navigation__link--slider navigation__link--current-page-status'
                      : 'navigation__link  navigation__link--slider '
                  }
                  href="/"
                >
                  Studio
                </Link>
              </li>
              <li className="navigation__item">
                <Link
                  className={
                    pathName === '/portfolio'
                      ? 'navigation__link  navigation__link--slider navigation__link--current-page-status'
                      : 'navigation__link  navigation__link--slider '
                  }
                  href="/portfolio"
                >
                  Portfolio
                </Link>
              </li>
              <li className="navigation__item">
                <Link
                  className="navigation__link navigation__link--slider"
                  href="/contacts"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
          <ul className="navigation__contact-list">
            <li className="navigation__item-contacts">
              <a
                className="navigation__link-contacts"
                href="mailto:info@devstudio.com"
              >
                <svg
                  className="navigation__icon navigation__icon--tablet-mail"
                  width="16px"
                  height="12px"
                  aria-label="Mail"
                >
                  <use href="./images/symbol-defs.svg#icon-mailto"></use>
                </svg>
                info@devstudio.com
              </a>
            </li>
            <li className="navigation__item-contacts">
              <a
                className="navigation__link-contacts --mobile-modificator"
                href="tel:+380961111111"
              >
                <svg
                  className="navigation__icon navigation__icon--tablet-tell"
                  width="10px"
                  height="16px"
                  aria-label="Telephone"
                >
                  <use href="./images/symbol-defs.svg#icon-tellto"></use>
                </svg>
                +38 096 111 11 11
              </a>
            </li>
          </ul>
          <ul className="social-mobile">
            <li className="social-mobile__item">
              <a
                className="social-mobile__link"
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                Instagram
              </a>
            </li>
            <li className="social-mobile__item">
              <a
                className="social-mobile__link"
                href="https://twitter.com/?lang=ru"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                Twitter
              </a>
            </li>
            <li className="social-mobile__item">
              <a
                className="social-mobile__link"
                href="https://www.facebook.com//"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                Facebook
              </a>
            </li>
            <li className="social-mobile__item">
              <a
                className="social-mobile__link"
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
