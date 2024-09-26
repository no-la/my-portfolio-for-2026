/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const wrapStyle = (theme) => css`
  display: flex;
  height: 100%;
`;
const defaultCardStyle = (theme) => css`
  width: 350px;
  height: auto;
  background-color: ${theme.colors.white};
  padding: 20px;
  border-radius: 10px;
`;
const Card = ({ cardStyle, children }) => {
  return (
    <div css={wrapStyle}>
      <div css={[defaultCardStyle, cardStyle]}>
        {children}
      </div>
    </div>
  );
};

export default Card;
