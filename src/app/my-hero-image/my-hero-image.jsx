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
    transform: translate(18px, 26px) scale(0.7);
  }
  25%{
    transform: translate(6px, 20px) scale(0.77);
  }
  50%{
    transform: translate(8px, 13px) scale(0.85);
  }
  75%{
    transform: translate(3px, 6px) scale(0.92);
  }
  100% {
    opacity: 1;
    transform: translate(0px, 0px) scale(1);
  }
`;
const appearTitleAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
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
    }, 500); // 最低~~ミリ秒はMyLoadingを表示
  }, []);
  return (
    <>
      {!isStarted && (
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
              width: min(16%, 200px);
              opacity: 0;
              animation: ${!isLoading
                  ? appearObakeAnimation
                  : undefined}
                1500ms ${delay + 0.2}s linear forwards;
            `}
          />
          <h1
            css={(theme) => css`
              color: ${theme.colors.white};
              opacity: 0;
              font-size: min(6vw, 60px);
              animation: ${!isLoading
                  ? appearTitleAnimation
                  : undefined}
                500ms ${delay}s ease-out forwards;
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
