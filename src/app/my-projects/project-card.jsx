/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import CardHeader from '../../components/card-header/card-header';
import TagList from '../../components/tag-list/tag-list';

const wrapStyle = (theme) => css`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
`;

const ProjectCard = () => {
  return (
    <div css={wrapStyle}>
      <img
        src="src\assets\sample\images\3921310_s.jpg"
        alt="my project thumbnail"
        css={(theme) => ({
          width: '350px',
          objectFit: 'cover',
        })}
      />
      <CardHeader>project name</CardHeader>
      <div>
        <div>
          株式会社f4samuraiのサマーインターンで制作したゲーム。
        </div>
        <TagList
          tags={[
            'JavaScript',
            'HTML',
            'CSS',
            'React',
            'VSCode',
            'Git',
          ]}
        />
      </div>
    </div>
  );
};

export default ProjectCard;
