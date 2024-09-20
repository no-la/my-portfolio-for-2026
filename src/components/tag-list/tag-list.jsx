/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import Tag from '../tag/tag';

const listStyle = css`
  display: flex;
  flex-wrap: wrap;
  gap: 2px 4px;
  align-items: center;
  justify-content: center;
`;

const TagList = ({ tags }) => {
  return (
    <ul css={listStyle}>
      {tags.map((t, i) => (
        <Tag tagId={t} key={`tag-${t}`} />
      ))}
    </ul>
  );
};

export default TagList;
