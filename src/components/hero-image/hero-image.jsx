/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';

const wrapStyle = css`
  position: relative;
  width: 100vw;
  height: 100vh;
`;
const imgStyle = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const HeroImage = ({ imgPath, children }) => {
  return (
    <section css={wrapStyle}>
      <img src={imgPath} alt="hero-image" css={imgStyle} />
      {children}
    </section>
  );
};

export default HeroImage;
