/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';

const height = '50px';

const MyFooter = () => {
  return (
    <footer
      css={(theme) => css`
        /* height: ${height}; */
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
