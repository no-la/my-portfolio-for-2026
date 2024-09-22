/** @jsxImportSource @emotion/react */

const CardHeader = ({ children }) => {
  return (
    <h3
      css={(theme) => ({
        backgroundColor: theme.colors.secondary,
        textAlign: 'center',
      })}
    >
      {children}
    </h3>
  );
};

export default CardHeader;
