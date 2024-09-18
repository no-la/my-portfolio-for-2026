/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import SectionHeader from '../../components/section-header/section-header';
import SkillCard from './skill-card';

const wrapStyle = css`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
`;
const cellStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const itemStyle = css``;

const datas = [
  ['Python', '5年'],
  ['C#', '1年'],
  ['JavaScript', '6か月'],
];

const MySkills = () => {
  return (
    <section id="skills">
      <SectionHeader>Skills</SectionHeader>
      <div css={wrapStyle}>
        {[...Array(4)].map((_, i) => (
          <div key={i} css={cellStyle}>
            <SkillCard></SkillCard>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MySkills;
