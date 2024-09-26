/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import SimpleButton from '../../components/simple-button/simple-button';

const height = '50px';
const headerStyle = (theme) => css`
  display: flex;
  justify-content: space-between;
  height: ${height};
  background-color: ${theme.colors.primary};
  box-shadow: 0 3px 3px ${`${theme.colors.black}7a`};

  /* stick at top */
  position: sticky;
  top: 0;
  left: 0;
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
  color: ${theme.colors.white};
  font-weight: ${theme.fontWeight.bold};

  :visited {
    color: ${theme.colors.white};
  }
  :hover {
    background-color: ${theme.colors.secondary};
  }
`;

const MyHeader = () => {
  return (
    <header css={headerStyle}>
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
