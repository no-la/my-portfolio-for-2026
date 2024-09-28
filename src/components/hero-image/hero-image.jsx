/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';

const sectionStyle = (theme) => css`
  /* reset */
  margin: 0;
  padding: 0;
`;
const heroImageStyle = (theme) => css`
  top: 0;
  left: 0;
  width: 100%;
  max-height: calc(100vh - ${theme.var.headerHeight});
  object-fit: cover;
  object-position: top;
`;

const HeroImage = ({
  imgPath,
  children,
  id,
  imgStyle,
  wrapStyle,
}) => {
  return (
    <section css={[sectionStyle, wrapStyle]} id={id}>
      <img
        src={imgPath}
        alt="hero-image"
        css={[heroImageStyle, imgStyle]}
      />
      {children}
    </section>
  );
};

export default HeroImage;
