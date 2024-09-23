/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const backgroundStyle = css`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

// set "position: relative" to parent elem
const Background = ({ style }) => {
  return <div css={[backgroundStyle, style]}></div>;
};

export default Background;
