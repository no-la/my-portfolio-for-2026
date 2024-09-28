/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import TagList from '../../components/tag-list/tag-list';
import ProjectDetailModal from './project-detail-modal';
import { useState } from 'react';
import Card from '../../components/card/card';
import CardHeader from '../../components/card-header/card-header';

const cardStyle = (theme) => css`
  background-color: ${theme.colors.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 360px;
  :hover {
    cursor: pointer;
    box-shadow:
      3px 3px 1px ${theme.colors.tertiary},
      3px -3px 1px ${theme.colors.tertiary},
      -3px 3px 1px ${theme.colors.tertiary},
      -3px -3px 1px ${theme.colors.tertiary};
    position: relative;
    bottom: 4px;
  }
`;
const thumbnailImageStyle = (theme) => css`
  width: 100%;
  object-fit: cover;
  margin-bottom: 12px;
`;
const summaryTextStyle = (theme) => css`
  margin-bottom: 16px;
`;

const ProjectCard = ({
  name,
  tags,
  summary: { thumbnail, text },
  detail,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Card
      cardStyle={cardStyle}
      onClick={() => setIsModalOpen(true)}
    >
      <img
        src={thumbnail}
        alt={`thumbnail-${name}`}
        css={(theme) => thumbnailImageStyle}
      />
      <CardHeader>{name}</CardHeader>
      <div css={summaryTextStyle}>{text}</div>
      <TagList tags={tags} />
      <ProjectDetailModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        name={name}
        tags={tags}
        {...detail}
      />
    </Card>
  );
};

export default ProjectCard;
