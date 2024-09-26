/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const wrapStyle = (theme) => css`
  display: flex;
  align-self: stretch;
`;
const defaultCardStyle = (theme) => css`
  width: 350px;
  background-color: ${theme.colors.white};
  padding: 20px;
  border-radius: 10px;
`;
const Card = ({ cardStyle, children, onClick }) => {
  return (
    <div css={wrapStyle}>
      <div
        css={[defaultCardStyle, cardStyle]}
        onClick={onClick}
      >
        {children}
      </div>
    </div>
  );
};

export default Card;
