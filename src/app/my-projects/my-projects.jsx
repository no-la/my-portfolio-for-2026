/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import SectionHeader from '../../components/section-header/section-header';
import ProjectCard from './project-card';
import datas from '../../assets/data/my-projects.json';

const wrapStyle = css`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 30px 100px;
  gap: 30px;
`;

console.log(datas);
const MyProjects = () => {
  return (
    <section id="projects">
      <SectionHeader>Projects</SectionHeader>
      <div css={wrapStyle}>
        {Object.keys(datas).map((key, i) => (
          <ProjectCard
            key={`project-${key}`}
            {...datas[key]}
          />
        ))}
      </div>
    </section>
  );
};

export default MyProjects;
