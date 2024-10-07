/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import SectionHeader from '../../components/section-header/section-header';

const wrapStyle = (theme) => css`
  display: flex;
  align-items: center;
  gap: 60px;
  flex-direction: column;
  padding: ${theme.var.sectionPadding};
`;

const conceptTextStyle = (theme) => css`
  font-size: ${theme.fontSizes.large};
`;

const MyConcept = () => {
  return (
    <section>
      <SectionHeader>Concept</SectionHeader>
      <div css={wrapStyle}>
        <div css={conceptTextStyle}>
          「まっすぐに自分を伝えるポートフォリオ」
        </div>
        <div>
          <p>
            このサイトは「まっすぐに自分を伝えるポートフォリオ」をコンセプトに制作したポートフォリオサイトです。
            私のこれまでの取り組みについて、動機やそこから学んだことなどを含めて、詳細に紹介しています。
            このサイトを通じて、私ができること、好きなこと、大事にしたいことを少しでも知っていただけたらとても嬉しいです！
          </p>
        </div>
      </div>
    </section>
  );
};

export default MyConcept;
