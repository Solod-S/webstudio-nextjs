'use client';

import React, { useEffect } from 'react';
import Modal from 'react-modal';

interface ModalFormProps {
  onRequestClose: () => void;
}

function ModalForm({ onRequestClose }: ModalFormProps) {
  return (
    <div>
      <button
        className="modal__close-button"
        aria-label="close a window"
        onClick={onRequestClose}
        data-modal-close
      >
        <svg className="modal__close-button-icon" width="11px" height="11px">
          <use href="./images/symbol-defs.svg#icon-cross"></use>
        </svg>
      </button>
      <h2 className="modal__title">
        Leave your details, we will call you back
      </h2>
      <form className="modal__form">
        <div className="modal__form-field">
          <label className="modal__input-label" htmlFor="name">
            {' '}
            Name
          </label>
          <span className="modal__wrapper">
            <input
              className="modal__input"
              type="text"
              name="name"
              id="name"
              placeholder=" "
            />
            <svg
              className="modal__input-icon"
              width="18px"
              height="18px"
              aria-label="Name icon"
            >
              <use href="./images/symbol-defs.svg#icon-name-modal"></use>
            </svg>
          </span>
        </div>
        <div className="modal__form-field">
          <label className="modal__input-label" htmlFor="phone">
            Telephone
          </label>
          <span className="modal__wrapper">
            <input
              className="modal__input"
              type="tel"
              name="phone"
              id="phone"
              placeholder=" "
            />
            <svg
              className="modal__input-icon"
              width="18px"
              height="18px"
              aria-label="Phone icon"
            >
              <use href="./images/symbol-defs.svg#icon-tell-modal"></use>
            </svg>
          </span>
        </div>
        <div className="modal__form-field">
          <label className="modal__input-label" htmlFor="mail">
            {' '}
            Mail
          </label>
          <span className="modal__wrapper">
            <input
              className="modal__input"
              type="email"
              name="mail"
              id="mail"
              placeholder=" "
            />
            <svg
              className="modal__input-icon"
              width="18px"
              height="18px"
              aria-label="Mail icon"
            >
              <use href="./images/symbol-defs.svg#icon-mail-modal"></use>
            </svg>
          </span>
        </div>
        <div className="modal__textarea-field">
          <label className="modal__textarea-label" htmlFor="comment">
            Comment
          </label>
          <textarea
            className="modal__textarea"
            name="feedback"
            rows={5}
            id="comment"
            placeholder="Enter the text"
          ></textarea>
        </div>
        <div className="modal__checkbox-field">
          <label className="modal__checkbox-label" htmlFor="policy">
            <input
              className="modal__checkbox-input"
              type="checkbox"
              name="policy"
              id="policy"
            />
            <span className="modal__checkbox-square"></span>
            <span>
              I agree with the newsletter and accept
              <a
                className="modal__checkbox-link"
                href="https://en.wikipedia.org/wiki/End-user_license_agreement"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                Agreement conditions
              </a>
            </span>
          </label>
        </div>
        <button className="modal__button" type="submit">
          Send
        </button>
      </form>
    </div>
  );
}

interface ModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  // contentLabel: string;
}

const PlaceOrderForm: React.FC<ModalProps> = ({
  isOpen,
  onRequestClose,
  // contentLabel,
}) => {
  useEffect(() => {
    const appElement = document.getElementById('__next');
    if (appElement) {
      Modal.setAppElement(appElement);
    } else {
      // Retry setting the app element in case it's not immediately available
      setTimeout(() => {
        const retryAppElement = document.getElementById('__next');
        if (retryAppElement) {
          Modal.setAppElement(retryAppElement);
        }
      }, 100); // Delay can be adjusted if needed
    }
  }, []);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      // contentLabel={contentLabel}
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 5,
        },
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
      }}
    >
      <ModalForm onRequestClose={onRequestClose} />
    </Modal>
  );
};

export default PlaceOrderForm;
