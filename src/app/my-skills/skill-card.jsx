/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';

const cardStyle = (theme) => css`
  width: 400px;
  height: 500px;
  background-color: ${theme.colors.secondary};
  padding: 20px;
`;

const SkillCard = () => {
  return (
    <div css={cardStyle}>
      <h3>Languages / Frameworks</h3>
      <div>
        <ul>
          <li>dummy</li>
          <li>dummy</li>
          <li>dummy</li>
          <li>dummy</li>
          <li>dummy</li>
        </ul>
      </div>
    </div>
  );
};

export default SkillCard;
