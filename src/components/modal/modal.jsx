/** @jsxImportSource @emotion/react */

import { css, keyframes } from '@emotion/react';

const transitionDuration = 150;
const openTransition = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;
const openModalTransition = keyframes`
   0% {
    transform: scale(0.8);
  }
  100% {
    transform: scale(1);
  }
`;
const closeTransition = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;
const closeModalTransition = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0.8);
  }
`;

const overlayStyle = (theme, isActive, isAnimating) => css`
  display: ${isAnimating ? 'flex' : 'none'};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: ${`${theme.colors.black}78`};
  align-items: center;
  justify-content: center;
  z-index: 999;

  animation: ${isActive && isAnimating
      ? openTransition
      : closeTransition}
    ${transitionDuration}ms ease-out;
  animation-fill-mode: forwards;

  /* for not scroll background */
  overscroll-behavior: none;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }

  :hover {
    cursor: pointer;
  }
`;
const modalStyle = (theme, isActive, isAnimating) => css`
  background-color: ${theme.colors.white};
  cursor: default;
  max-height: 85%;
  animation: ${isActive && isAnimating
      ? openModalTransition
      : closeModalTransition}
    200ms ease-out;
  animation-fill-mode: forwards;
`;

const Modal = ({
  onClose,
  isActive,
  isAnimating,
  onAnimationEnd,
  style,
  children,
}) => {
  return (
    <div
      css={(theme) =>
        overlayStyle(theme, isActive, isAnimating)
      }
      onClick={(e) => {
        e.stopPropagation();
        onClose();
      }}
      onAnimationEnd={onAnimationEnd}
    >
      <div
        css={[
          (theme) =>
            modalStyle(theme, isActive, isAnimating),
          style,
        ]}
        onClick={(e) => {
          e.stopPropagation();
        }}
        onAnimationEnd={onAnimationEnd}
      >
        {children}
      </div>
      <div
        css={css`
          height: calc(100vh + 1px);
          width: 1px;
          background-color: transparent;
        `}
      ></div>
    </div>
  );
};

export default Modal;
