/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import SectionHeader from '../../components/section-header/section-header';
import OtherCard from './other-card';

const datas = [
  {
    name: 'AtCoder',
    tags: [0, 100],
    text: '友人に誘われて、2023/9頃に始め、現在も趣味として続けている。現在は緑コーダーで、水色コーダーを目標にしている。',
  },
  {
    name: 'AtCoder',
    tags: [0, 100],
    text: '友人に誘われて、2023/9頃に始め、現在も趣味として続けている。現在は緑コーダーで、水色コーダーを目標にしている。',
  },
  {
    name: 'AtCoder',
    tags: [0, 100],
    text: '友人に誘われて、2023/9頃に始め、現在も趣味として続けている。現在は緑コーダーで、水色コーダーを目標にしている。',
  },
  {
    name: 'AtCoder',
    tags: [0, 100],
    text: '友人に誘われて、2023/9頃に始め、現在も趣味として続けている。現在は緑コーダーで、水色コーダーを目標にしている。',
  },
];

const WrapStyle = css`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 30px 100px;
  gap: 30px;
`;

const MyOthers = () => {
  return (
    <section id="others">
      <SectionHeader>Others</SectionHeader>
      <div css={WrapStyle}>
        {datas.map((data, i) => (
          <OtherCard
            key={`other-card-${data.name}`}
            {...data}
          ></OtherCard>
        ))}
      </div>
    </section>
  );
};

export default MyOthers;
