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
const pageIconStyle = (theme) => css`
  background-color: ${theme.colors.primary};
  line-height: ${height};
`;
const navButtonStyle = (theme) => css`
  /* reset */
  text-decoration: none;
  line-height: ${height};
  padding: 0 8px;
  color: ${theme.colors.black};
  :visited {
    color: ${theme.colors.black};
  }
  :hover {
    background-color: ${theme.colors.primary};
  }
`;

const MyHeader = () => {
  return (
    <header css={headerStyle} id="top">
      <div css={pageIconStyle}>nola&apos;s portfolio</div>
      <nav css={navStyle}>
        {[
          'Top',
          'Profile',
          'Skills',
          'Projects',
          'Others',
        ].map((t, i) => {
          return (
            <a
              key={i}
              href={`#${t.toLowerCase()}`}
              css={navButtonStyle}
            >
              {t}
            </a>
          );
        })}
      </nav>
    </header>
  );
};

export default MyHeader;
