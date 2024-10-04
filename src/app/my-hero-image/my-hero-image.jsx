/** @jsxImportSource @emotion/react */
import { css, keyframes } from '@emotion/react';
import HeroImage from '../../components/hero-image/hero-image';
import MyLoading from './my-loading';
import { useReducer } from 'react';
import { useEffect } from 'react';
import { useMemo } from 'react';

const delay = 0.5;
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
const closeMyLoadingAnimation = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;
const myLoadingStyle = css`
  position: fixed;
  animation: ${closeMyLoadingAnimation} ${delay}s ease-out
    forwards;
  z-index: 1000;
`;

const MyHeroImage = () => {
  const [isLoadingCount, countFinishLoading] = useReducer(
    (v) => v + 1,
    0,
  );
  const isLoading = useMemo(
    () => isLoadingCount < 2,
    [isLoadingCount],
  );
  const [isStarted, start] = useReducer(() => true, false); // 0, 1: not started, 2: started

  useEffect(() => {
    const timer = setTimeout(() => {
      countFinishLoading();
      clearTimeout(timer);
    }, 1000); // 最低~~ミリ秒はMyLoadingを表示
  }, []);
  return (
    <>
      {!isStarted < 2 && (
        <div
          css={!isLoading ? myLoadingStyle : null}
          onAnimationEnd={start}
        >
          <MyLoading />
        </div>
      )}
      <HeroImage
        imgPath="images/hero-image.jpg"
        id="top"
        wrapStyle={css`
          position: relative;
        `}
        onLoad={countFinishLoading}
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
              opacity: 0;
              animation: ${!isLoading
                  ? appearObakeAnimation
                  : undefined}
                1s ${delay}s linear forwards;
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
    </>
  );
};

export default MyHeroImage;
