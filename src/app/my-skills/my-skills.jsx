/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import SectionHeader from '../../components/section-header/section-header';
import SkillCard from './skill-card';

import datas from '../../assets/data/my-skills.json';

const breakpoints = ['800px', '1600px'];

const wrapStyle = css`
  display: grid;
  gap: 60px;
  padding: 30px 100px;
  @media (max-width: ${breakpoints[0]}) {
    grid-template-columns: 1fr;
  }
  @media (min-width: ${breakpoints[0]}) and (max-width: ${breakpoints[1]}) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: ${breakpoints[1]}) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
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
      <div
        css={{ display: 'flex', justifyContent: 'center' }}
      >
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
      </div>
    </section>
  );
};

export default MySkills;
