/** @jsxImportSource @Emotion/react */

import { css } from '@emotion/react';

const DummyContent = ({
  children = 'Dummy',
  width = 400,
  height = 400,
  style = '',
}) => {
  return (
    <div
      css={(theme) => [
        css`
          height: ${height}px;
          width: ${width}px;
          background-color: ${theme.colors.primary};
        `,
        css`
          ${style}
        `,
      ]}
    >
      {children}
    </div>
  );
};

export default DummyContent;
