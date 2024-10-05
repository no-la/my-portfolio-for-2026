/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import SectionHeader from '../../components/section-header/section-header';
import OtherCard from './other-card';
import datas from '../../assets/data/my-others.json';

const WrapStyle = (theme) => css`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: ${theme.var.sectionPadding};
  gap: 30px;
`;

const MyOthers = () => {
  return (
    <section id="others">
      <SectionHeader>Others</SectionHeader>
      <div css={WrapStyle}>
        {Object.keys(datas).map((key, i) => (
          <OtherCard key={key} {...datas[key]}></OtherCard>
        ))}
      </div>
    </section>
  );
};

export default MyOthers;
