/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';

const divStyle = (theme) => css`
  text-align: center;
  border-bottom: 1px solid ${theme.colors.background};
`;

const SkillItem = ({ name, duration }) => {
  return (
    <>
      <div css={divStyle}>{name}</div>
      <div css={divStyle}>{duration}</div>
    </>
  );
};

export default SkillItem;
