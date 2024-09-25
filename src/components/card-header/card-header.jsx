/** @jsxImportSource @emotion/react */

const CardHeader = ({ children }) => {
  return (
    <h2
      css={(theme) => ({
        // backgroundColor: theme.colors.secondary,
        textAlign: 'center',
      })}
    >
      {children}
    </h2>
  );
};

export default CardHeader;
