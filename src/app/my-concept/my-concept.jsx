/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import SectionHeader from '../../components/section-header/section-header';

const wrapStyle = (theme) => css`
  font-size: ${theme.fontSizes.large};
  padding: ${theme.var.sectionPadding};
`;

const MyConcept = () => {
  return (
    <section>
      <SectionHeader>Concept</SectionHeader>
      <div css={wrapStyle}>...</div>
    </section>
  );
};

export default MyConcept;
