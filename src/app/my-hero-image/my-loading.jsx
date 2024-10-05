/** @jsxImportSource @emotion/react */

import { css, keyframes } from '@emotion/react';
import LoadingScreen from '../../components/loading-screen/loading-screen';

const loadingAnimation = keyframes`
    from {
        transform: translate(0, 4px);
    }
    to {
        transform: translate(0, 0px);
    }
`;
const loadingStyle = (theme) => css`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${theme.colors.white};
  font-size: 4vw;
`;
const circleAnimationStyle = (theme, delay) => css`
  animation: ${loadingAnimation} 1.2s ${delay}s infinite
    running;
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background-color: ${theme.colors.white};
`;

const MyLoading = () => {
  return (
    <LoadingScreen>
      <div
        css={css`
          display: flex;
        `}
      >
        <h1 css={loadingStyle}>
          Loading
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              css={(theme) =>
                circleAnimationStyle(theme, i * 0.3)
              }
            />
          ))}
        </h1>
      </div>
    </LoadingScreen>
  );
};

export default MyLoading;
