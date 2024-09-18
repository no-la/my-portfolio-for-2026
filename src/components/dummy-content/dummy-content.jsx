/** @jsxImportSource @Emotion/react */

import { css } from '@emotion/react';

const DummyContent = ({ children = 'Dummy' }) => {
  return (
    <div
      css={(theme) => css`
        height: 400px;
        width: 400px;
        background-color: ${theme.colors.primary};
      `}
    >
      {children}
    </div>
  );
};

export default DummyContent;
