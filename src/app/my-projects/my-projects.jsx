/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import SectionHeader from '../../components/section-header/section-header';
import ProjectCard from './project-card';

const wrapStyle = css`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 30px 100px;
  gap: 30px;
`;

const datas = {
  a: '1',
  b: '2',
  c: '3',
  d: '4',
  e: '5',
  f: '6',
};

const MyProjects = () => {
  return (
    <section id="projects">
      <SectionHeader>Projects</SectionHeader>
      <div css={wrapStyle}>
        {Object.keys(datas).map((key, i) => (
          <ProjectCard key={`project-${key}`} />
        ))}
      </div>
    </section>
  );
};

export default MyProjects;
