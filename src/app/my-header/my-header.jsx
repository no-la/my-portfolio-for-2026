/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import SimpleButton from '../../components/simple-button/simple-button';

const height = '50px';
const headerStyle = css`
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
const navStyle = css`
  display: flex;
  align-items: center;
`;
const pageIconStyle = css`
  background-color: rgb(208, 208, 230);
  line-height: ${height};
`;

const MyHeader = () => {
  return (
    <header css={headerStyle}>
      <div css={pageIconStyle}>nola&apos;s portfolio</div>
      <nav css={navStyle}>
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
      </nav>
    </header>
  );
};

export default MyHeader;
