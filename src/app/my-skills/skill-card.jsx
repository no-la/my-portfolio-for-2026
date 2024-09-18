/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import SkillItem from './skill-item';

const cardStyle = (theme) => css`
  width: 400px;
  height: 500px;
  background-color: ${theme.colors.secondary};
  padding: 20px;
  display: flex;
  row-gap: 30px;
  flex-direction: column;
`;
const ulStyle = (theme) => css`
  display: grid;
  grid-template-columns: 50px 1fr 100px;
`;

const SkillCard = ({ header, datas }) => {
  return (
    <div css={cardStyle}>
      <h3>{header}</h3>
      <div>
        <ul css={ulStyle}>
          {datas.map((data, i) => (
            <SkillItem key={i} {...data}></SkillItem>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SkillCard;
