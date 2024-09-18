/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import SectionHeader from '../../components/section-header/section-header';
import DummyContent from '../../components/dummy-content/dummy-content';

const cardWidth = 400;
const wrapStyle = css`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
`;
const cellStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const itemStyle = css``;

const MySkills = () => {
  return (
    <section id="skills">
      <SectionHeader>Skills</SectionHeader>
      <div css={wrapStyle}>
        {[...Array(4)].map((_, i) => (
          <div key={i} css={cellStyle}>
            <DummyContent
              num={4}
              width={cardWidth}
              height={500}
              style={itemStyle}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default MySkills;
