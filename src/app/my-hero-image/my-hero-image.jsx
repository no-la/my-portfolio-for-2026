/** @jsxImportSource @emotion/react */
import { css, keyframes } from '@emotion/react';
import HeroImage from '../../components/hero-image/hero-image';

const appearObakeAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translate(15px, 24px) scale(0.8);
  }
  25%{
    transform: translate(9px, 18px) scale(0.85);
  }
  50%{
    transform: translate(7px, 12px) scale(0.9);
  }
  75%{
    transform: translate(3px, 6px) scale(0.95);
  }
  100% {
    opacity: 1;
    transform: translate(0px, 0px) scale(1);
  }
`;

const MyHeroImage = ({ finishLoading }) => {
  return (
    <HeroImage
      imgPath="images/hero-image.jpg"
      id="top"
      wrapStyle={css`
        position: relative;
      `}
      onLoad={finishLoading}
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
            width: 16%;
            animation: ${appearObakeAnimation} 1s linear;
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
