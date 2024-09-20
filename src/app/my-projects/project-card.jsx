/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import CardHeader from '../../components/card-header/card-header';

const wrapStyle = (theme) => css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProjectCard = ({}) => {
  return (
    <div css={wrapStyle}>
      <img src="" alt="my project thumbnail" />
      <CardHeader>project name</CardHeader>
      <div>
        <div>
          株式会社f4samuraiのサマーインターンで制作したゲーム。
        </div>
        <div>
          <div>JavaScript</div>
          <div>HTML</div>
          <div>CSS</div>
          <div>React</div>
          <div>VSCode</div>
          <div>Git</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
