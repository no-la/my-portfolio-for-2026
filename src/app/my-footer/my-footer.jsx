/** @jsxImportSource @emotion/react */

const height = '50px';

const MyFooter = () => {
  return (
    <footer
      css={(theme) => ({
        height: height,
        lineHeight: height,
        backgroundColor: theme.colors.primary,
        textAlign: 'center',
      })}
    >
      © 2024 nola
    </footer>
  );
};

export default MyFooter;
