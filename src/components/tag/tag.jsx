/** @jsxImportSource @emotion/react */

const Tag = ({ tagName }) => {
  return (
    <span
      css={(theme) => ({
        backgroundColor: theme.colors.primary,
        borderRadius: '10px',
        padding: '1px 4px',
        fontSize: theme.fontSizes.small,
      })}
    >
      {tagName}
    </span>
  );
};

export default Tag;
