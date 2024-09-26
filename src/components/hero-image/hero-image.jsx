/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';

const wrapStyle = css`
  /* reset */
  margin: 0;
  padding: 0;
`;
const imgStyle = css`
  top: 0;
  left: 0;
  width: 100%;
  max-height: 100vh;
  object-fit: contain;
`;

const HeroImage = ({ imgPath, children, id }) => {
  return (
    <section css={wrapStyle} id={id}>
      <img src={imgPath} alt="hero-image" css={imgStyle} />
      {children}
    </section>
  );
};

export default HeroImage;
