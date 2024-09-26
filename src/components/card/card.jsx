/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import CardHeader from '../card-header/card-header';

const wrapStyle = (theme) => css`
  display: flex;
  height: 100%;
`;
const Card = ({ cardStyle, header, children }) => {
  return (
    <div css={wrapStyle}>
      <div css={cardStyle}>
        <CardHeader>{header}</CardHeader>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Card;
