/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import SectionHeader from '../../components/section-header/section-header';
import CardHeader from '../../components/card-header/card-header';
import datas from '../../assets/data/my-profile.json';

const wrapStyle = css`
  display: flex;
  padding: 30px 100px;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px 30px;
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
          <img
            src={datas.image}
            alt=""
            css={css`
              width: 200px;
              height: 200px;
            `}
          />
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
