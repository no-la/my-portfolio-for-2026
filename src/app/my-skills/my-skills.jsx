/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import SectionHeader from '../../components/section-header/section-header';
import SkillCard from './skill-card';

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

const datas = [
  {
    icon: 'Py',
    name: 'Python',
    duration: '5年',
  },
  {
    icon: 'JS',
    name: 'JavaScript',
    duration: '6ヶ月',
  },
  {
    icon: 'C#',
    name: 'C#',
    duration: '1年',
  },
];

const MySkills = () => {
  return (
    <section id="skills">
      <SectionHeader>Skills</SectionHeader>
      <div css={wrapStyle}>
        {[...Array(4)].map((_, i) => (
          <div key={i} css={cellStyle}>
            <SkillCard
              header="Languages / Frameworks"
              datas={datas}
            ></SkillCard>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MySkills;
