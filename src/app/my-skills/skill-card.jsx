/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';

const cardStyle = (theme) => css`
  width: 400px;
  height: 500px;
  background-color: ${theme.colors.secondary};
  padding: 20px;
  display: flex;
  row-gap: 30px;
  flex-direction: column;
`;

const SkillCard = ({ header, datas }) => {
  return (
    <div css={cardStyle}>
      <h3>{header}</h3>
      <div>
        <ul>
          {datas.map((data, i) => (
            <li key={i}>{data.join('')}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SkillCard;
