/** @jsxImportSource @emotion/react */

import datas from '../../assets/data/tags';

const Tag = ({ tagId }) => {
  return (
    <li
      css={(theme) => ({
        backgroundColor:
          datas[tagId].color || theme.colors.primary,
        borderRadius: '10px',
        padding: '1px 4px',
        fontSize: theme.fontSizes.small,
      })}
    >
      {datas[tagId].name}
    </li>
  );
};

export default Tag;
