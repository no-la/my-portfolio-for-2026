/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const headerStyle = (theme) => css`
  display: flex;
  justify-content: space-between;
  height: ${theme.var.headerHeight};
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
  display: flex;
  background-color: ${theme.colors.primary};
  line-height: ${theme.var.headerHeight};
  font-size: ${theme.fontSizes.large};
  color: ${theme.colors.white};
  font-weight: ${theme.fontWeight.bold};
  margin-left: 4px;
  height: ${theme.var.headerHeight};
  column-gap: 2px;
`;
const navButtonStyle = (theme) => css`
  /* reset */
  text-decoration: none;
  line-height: ${theme.var.headerHeight};

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
      <div css={pageIconStyle}>
        <img
          src="images/obake.png"
          alt="page-icon"
          css={css`
            height: 100%;
            object-fit: contain;
          `}
        />
        <div>nola&apos;s portfolio</div>
      </div>
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
