/** @jsxImportSource @emotion/react */
import SimpleButton from '../../components/simple-button/simple-button';
import styled from '@emotion/styled';

const height = '50px';
const Header = styled.header`
  display: flex;
  justify-content: space-between;
  height: ${height};

  /* stick at top */
  position: sticky;
  top: 0;
  left: 0;
  background-color: inherit;
  z-index: 100;
`;
const Nav = styled.nav`
  display: flex;
  align-items: center;
`;
const Sumbnail = styled.div`
  background-color: rgb(208, 208, 230);
  line-height: ${height};
`;

const MyHeader = () => {
  return (
    <Header id="top">
      <Sumbnail>nola&apos;s portfolio</Sumbnail>
      <Nav>
        {['Top', 'Skills', 'Projects', 'Others'].map(
          (t) => {
            return (
              <SimpleButton
                key={`headre-${t}-button`}
                onClick={() =>
                  console.log(`${t} is clicked!`)
                }
              >
                {t}
              </SimpleButton>
            );
          },
        )}
      </Nav>
    </Header>
  );
};

export default MyHeader;
