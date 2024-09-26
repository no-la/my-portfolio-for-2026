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
  :hover {
    cursor: pointer;
  }
`;

const ProjectCard = ({
  name,
  tags,
  summary: { thumbnail, text },
  detail,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Card cardStyle={cardStyle}>
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
