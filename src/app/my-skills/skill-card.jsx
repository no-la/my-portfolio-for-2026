/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import SkillItem from './skill-item';

const wrapStyle = (theme) => css`
  display: flex;
  height: 100%;
`;
const cardStyle = (theme) => css`
  width: 350px;
  height: auto;
  background-color: ${theme.colors.secondary};
  padding: 20px;
  display: flex;
  row-gap: 30px;
  flex-direction: column;
`;
const ulStyle = (theme) => css`
  display: grid;
  grid-template-columns: 1fr 100px;
`;

const SkillCard = ({ header, datas }) => {
  return (
    <div css={wrapStyle}>
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
    </div>
  );
};

export default SkillCard;
