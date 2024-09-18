/** @jsxImportSource @emotion/react */

const SectionHeader = ({ children }) => {
  return (
    <h2
      className="section-header"
      css={(theme) => ({
        backgroundColor: theme.colors.primary,
        textAlign: 'center',
      })}
    >
      {children}
    </h2>
  );
};

export default SectionHeader;
