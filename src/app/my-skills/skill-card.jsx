/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import SkillItem from './skill-item';
import Card from '../../components/card/card';
import CardHeader from '../../components/card-header/card-header';

const cardStyle = (theme) => css`
  height: auto;
  background-color: ${theme.colors.white};
  display: flex;
  row-gap: 16px;
  flex-direction: column;
  width: 300px;
`;
const ulStyle = (theme) => css`
  display: grid;
  grid-template-columns: 1fr 100px;
`;

const SkillCard = ({ header, datas }) => {
  return (
    <Card cardStyle={cardStyle}>
      <CardHeader>{header}</CardHeader>
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
