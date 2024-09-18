/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import SectionHeader from '../../components/section-header/section-header';
import SkillCard from './skill-card';

import datas from '../../assets/data/my-skills.json';

const wrapStyle = css`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  padding: 30px 100px;
`;
const cellStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MySkills = () => {
  return (
    <section id="skills">
      <SectionHeader>Skills</SectionHeader>
      <div css={wrapStyle}>
        {Object.keys(datas).map((key, i) => (
          <div key={`${key}-${i}`} css={cellStyle}>
            <SkillCard
              header={key}
              datas={datas[key]}
            ></SkillCard>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MySkills;
