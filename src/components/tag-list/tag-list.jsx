/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import Tag from '../tag/tag';

const listStyle = css`
  display: flex;
  flex-wrap: wrap;
  gap: 6px 4px;
  align-items: center;
  justify-content: center;
  min-height: 21px;
`;

const TagList = ({ tags, tagListStyle }) => {
  return (
    <ul css={[listStyle, tagListStyle]}>
      {tags.map((t, i) => (
        <Tag tagId={t} key={`tag-${t}`} />
      ))}
    </ul>
  );
};

export default TagList;
