/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import CardHeader from '../../components/card-header/card-header';
import TagList from '../../components/tag-list/tag-list';
import Card from '../../components/card/card';

const cardStyle = (theme) => css`
  display: flex;
  flex-direction: column;
  background: transparent;
  align-items: center;
  width: 400px;
`;
const tagListStyle = css``;
const resetPStyle = css`
  margin-bottom: 0;
`;
const contentWrapStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

const OtherCard = ({ name, tags, text, links }) => {
  return (
    <Card cardStyle={cardStyle}>
      <CardHeader>{name}</CardHeader>
      <div css={contentWrapStyle}>
        <TagList
          tags={tags}
          tagListStyle={tagListStyle}
        ></TagList>
        <div>
          {text.map((t, i) => (
            <p key={i} css={resetPStyle}>
              {t}
            </p>
          ))}
        </div>
        <ul>
          {links.map((url, i) => (
            <li key={i}>
              <a href={url}>{url}</a>
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
};

export default OtherCard;
