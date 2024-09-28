/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';

const Modal = ({ onClose, isActive, style, children }) => {
  return (
    <div
      css={(theme) => css`
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

        /* for not scroll background */
        overscroll-behavior: none;
        overflow-y: scroll;
        ::-webkit-scrollbar {
          display: none;
        }

        :hover {
          cursor: pointer;
        }
      `}
      onClick={(e) => {
        e.stopPropagation();
        onClose();
      }}
    >
      <div
        css={[
          (theme) => css`
            background-color: ${theme.colors.white};
            border-radius: 10px;
            overflow-x: hidden;
            overflow-y: auto;
            cursor: default;
            max-height: 85%;
          `,
          style,
        ]}
        onClick={(e) => {
          e.stopPropagation();
        }}
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
