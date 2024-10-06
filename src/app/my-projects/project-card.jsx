/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import TagList from '../../components/tag-list/tag-list';
import ProjectDetailModal from './project-detail-modal';
import { useState } from 'react';
import Card from '../../components/card/card';
import CardHeader from '../../components/card-header/card-header';

const interactionShadowWidth = 3;
const cardStyle = (theme) => css`
  background-color: ${theme.colors.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 360px;
  box-shadow: 5px 5px 6px ${theme.colors.black}30;

  /* animation */
  transition: all 0.2s ease-out;
  :hover {
    cursor: pointer;
    box-shadow:
      ${interactionShadowWidth}px
        ${interactionShadowWidth}px 1px
        ${theme.colors.tertiary},
      ${interactionShadowWidth}px -${interactionShadowWidth}px
        1px ${theme.colors.tertiary},
      -${interactionShadowWidth}px ${interactionShadowWidth}px
        1px ${theme.colors.tertiary},
      -${interactionShadowWidth}px -${interactionShadowWidth}px
        1px ${theme.colors.tertiary};
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
  text-align: center;
`;

const ProjectCard = ({
  name,
  tags,
  summary: { thumbnail, text },
  detail,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalAnimating, setIsModalAnimating] =
    useState(false); // modalが見えている間true

  const openModal = () => {
    setIsModalAnimating(true);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const handleAnimationEnd = () => {
    if (!isModalOpen) setIsModalAnimating(false);
  };

  return (
    <Card cardStyle={cardStyle} onClick={openModal}>
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
        isModalAnimating={isModalAnimating}
        onClose={closeModal}
        onAnimationEnd={handleAnimationEnd}
        name={name}
        tags={tags}
        {...detail}
      />
    </Card>
  );
};

export default ProjectCard;
