/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import CardHeader from '../../components/card-header/card-header';
import TagList from '../../components/tag-list/tag-list';
import ProjectDetailModal from './project-detail-modal';

const wrapStyle = (theme) => css`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
`;

const ProjectCard = ({
  name,
  tags,
  summary: { thumbnail, text },
  detail,
}) => {
  return (
    <div css={wrapStyle}>
      <img
        src={thumbnail}
        alt={`thumbnail-${name}`}
        css={(theme) => ({
          width: '350px',
          objectFit: 'cover',
        })}
      />
      <CardHeader>{name}</CardHeader>
      <div>
        <div>{text}</div>
        <TagList tags={tags} />
      </div>
      <ProjectDetailModal></ProjectDetailModal>
    </div>
  );
};

export default ProjectCard;
