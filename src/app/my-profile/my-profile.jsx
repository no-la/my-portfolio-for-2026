/** @jsxImportSource @emotion/react */

const MyProfile = () => {
  return (
    <section
      id="profile"
      css={(theme) => ({
        position: 'relative',
        height: '600px',
        backgroundColor: theme.colors.secondary,
      })}
    >
      <div>Profile</div>
    </section>
  );
};

export default MyProfile;
