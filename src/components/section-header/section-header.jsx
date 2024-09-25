/** @jsxImportSource @emotion/react */

const SectionHeader = ({ children }) => {
  return (
    <h1
      className="section-header"
      css={(theme) => ({
        backgroundColor: theme.colors.primary,
        textAlign: 'center',
      })}
    >
      {children}
    </h1>
  );
};

export default SectionHeader;
