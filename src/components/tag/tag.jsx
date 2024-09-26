/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import datas from '../../assets/data/tags';

const Tag = ({ tagId }) => {
  return (
    <li
      css={(theme) => css`
        background-color: ${datas[tagId].color ||
        theme.colors.primary};
        border-radius: 10px;
        padding: 1px 8px;
        font-size: ${theme.fontSizes.small};
      `}
    >
      {datas[tagId].name}
    </li>
  );
};

export default Tag;
