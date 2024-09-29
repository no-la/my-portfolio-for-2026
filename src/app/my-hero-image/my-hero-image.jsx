/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import HeroImage from '../../components/hero-image/hero-image';

const MyHeroImage = () => {
  return (
    <HeroImage
      imgPath="images/hero-image.jpg"
      id="top"
      wrapStyle={css`
        position: relative;
      `}
    >
      <div
        css={css`
          display: flex;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          justify-content: center;
          align-items: center;
        `}
      >
        <img
          src="images/obake.png"
          alt="logo"
          css={css`
            width: 300px;
            height: 300px;
          `}
        />
        <h1
          css={(theme) => css`
            color: ${theme.colors.white};
            font-size: 60px;
          `}
        >
          nola&apos;s portfolio
        </h1>
      </div>
    </HeroImage>
  );
};

export default MyHeroImage;
