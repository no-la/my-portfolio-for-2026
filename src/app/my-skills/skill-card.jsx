/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import SkillItem from './skill-item';
import Card from '../../components/card/card';

const cardStyle = (theme) => css`
  width: 350px;
  height: auto;
  background-color: ${theme.colors.white};
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
    <Card header={header} cardStyle={cardStyle}>
      <div>
        <ul css={ulStyle}>
          {datas.map((data, i) => (
            <SkillItem key={i} {...data}></SkillItem>
          ))}
        </ul>
      </div>
    </Card>
  );
};

export default SkillCard;
