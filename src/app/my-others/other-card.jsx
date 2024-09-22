/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import CardHeader from '../../components/card-header/card-header';
import TagList from '../../components/tag-list/tag-list';

const wrapStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 350px;
`;

const OtherCard = ({ name, tags, text }) => {
  return (
    <div css={wrapStyle}>
      <CardHeader>{name}</CardHeader>
      <TagList tags={tags}></TagList>
      <div>
        {text.map((t, i) => (
          <p key={i}>{t}</p>
        ))}
      </div>
    </div>
  );
};

export default OtherCard;
