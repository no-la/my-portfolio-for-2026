/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import SectionHeader from '../../components/section-header/section-header';
import ProjectCard from './project-card';
import datas from '../../assets/data/my-projects';

const wrapStyle = (theme) => css`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: ${theme.var.sectionPadding};
  gap: 60px;
`;

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
