/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import SectionHeader from '../../components/section-header/section-header';
import CardHeader from '../../components/card-header/card-header';
import datas from '../../assets/data/my-profile.json';

const imgSize = '160px';
const wrapStyle = css`
  display: flex;
  padding: 30px 100px;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px 36px;
`;
const imgStyle = (theme) => css`
  width: ${imgSize};
  height: ${imgSize};
  /* padding: 12px; */
  border: 2px solid ${theme.colors.primary};
  /* border: 1px solid ${theme.colors.black}; */
  border-radius: 100px;
  background-color: ${theme.colors.white};
`;
const resetPStyle = css`
  margin-bottom: 0;
`;

const MyProfile = () => {
  return (
    <section id="profile">
      <SectionHeader>Profile</SectionHeader>
      <div css={wrapStyle}>
        <div>
          <img src={datas.image} alt="" css={imgStyle} />
        </div>
        <div>
          <CardHeader>{datas.name}</CardHeader>
          <div>
            {datas.text.map((t, i) => (
              <p key={i} css={resetPStyle}>
                {t}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyProfile;
