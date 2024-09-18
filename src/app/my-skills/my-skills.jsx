/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import SectionHeader from '../../components/section-header/section-header';
import DummyContent from '../../components/dummy-content/dummy-content';

const contentWrapStyle = css`
  display: grid;
`;

const MySkills = () => {
  return (
    <section id="skills">
      <SectionHeader>Skills</SectionHeader>
      <div css={contentWrapStyle}>
        <DummyContent />
      </div>
    </section>
  );
};

export default MySkills;
