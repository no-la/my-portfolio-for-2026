/** @jsxImportSource @Emotion/react */

import { css } from '@emotion/react';

const DummyContent = ({ num = 1, children = 'Dummy' }) => {
  return (
    <>
      {[...Array(num)].map((_, i) => (
        <div
          css={(theme) => css`
            height: 400px;
            width: 400px;
            background-color: ${theme.colors.primary};
          `}
          key={i}
        >
          {children}
        </div>
      ))}
    </>
  );
};

export default DummyContent;
