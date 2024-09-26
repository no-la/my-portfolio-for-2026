/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import CardHeader from '../../components/card-header/card-header';
import TagList from '../../components/tag-list/tag-list';
import Card from '../../components/card/card';

const cardStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const OtherCard = ({ name, tags, text, links }) => {
  return (
    <Card cardStyle={cardStyle}>
      <CardHeader>{name}</CardHeader>
      <TagList tags={tags}></TagList>
      <div>
        {text.map((t, i) => (
          <p key={i}>{t}</p>
        ))}
      </div>
      <ul>
        {links.map((url, i) => (
          <li key={i}>
            <a href={url}>{url}</a>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default OtherCard;
