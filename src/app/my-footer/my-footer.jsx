/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';

const height = '60px';

const MyFooter = () => {
  return (
    <footer
      css={(theme) => css`
        height: ${height};
        color: ${theme.colors.white};
        line-height: ${height};
        background-color: ${theme.colors.primary};
        text-align: center;
      `}
    >
      <div>© 2024 nola</div>
    </footer>
  );
};

export default MyFooter;
