/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';

const divStyle = css`
  text-align: center;
  line-height: 40px;
`;

const SkillItem = ({ icon, name, duration }) => {
  return (
    <>
      <div css={divStyle}>{icon}</div>
      <div css={divStyle}>{name}</div>
      <div css={divStyle}>{duration}</div>
    </>
  );
};

export default SkillItem;
