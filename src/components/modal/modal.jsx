/** @jsxImportSource @emotion/react */

import { css, keyframes } from '@emotion/react';

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
    transform: translate(0px, -60px) scale(0.9, 0.9);
  }
  100% {
    transform: translate(0px, 0px) scale(1, 1);
  }
`;
// closeTransition ...

const overlayStyle = (theme, isActive) => css`
  display: ${isActive ? 'flex' : 'none'};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: ${`${theme.colors.black}78`};
  align-items: center;
  justify-content: center;
  z-index: 999;

  animation: ${openTransition} 200ms ease-out;
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
const modalStyle = (theme) => css`
  background-color: ${theme.colors.white};
  cursor: default;
  max-height: 85%;
  animation: ${openModalTransition} 200ms ease-out;
`;

const Modal = ({
  onClose,
  isActive,
  isModalAnimating,
  onAnimationEnd,
  style,
  children,
}) => {
  return (
    <div
      css={(theme) => overlayStyle(theme, isActive)}
      onClick={(e) => {
        e.stopPropagation();
        onClose();
      }}
      onAnimationEnd={onAnimationEnd}
    >
      <div
        css={[(theme) => modalStyle(theme), style]}
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
