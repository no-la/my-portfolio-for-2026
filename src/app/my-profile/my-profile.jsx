/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import SectionHeader from '../../components/section-header/section-header';
import CardHeader from '../../components/card-header/card-header';

const wrapStyle = css`
  display: flex;
  padding: 30px 100px;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px 30px;
`;

const MyProfile = () => {
  return (
    <section>
      <SectionHeader>Profile</SectionHeader>
      <div css={wrapStyle}>
        <div>
          <img
            src="src/assets/sample/images/tiwahu.png"
            alt=""
            css={{ width: '200px', height: '200px' }}
          />
        </div>
        <div>
          <CardHeader>のーら</CardHeader>
          <div>
            <p>
              あいうえおあいうえおあいうえおあいうえおあいうえおあいうえお
            </p>
            <p>
              あいうえおあいうえおあいうえおあいうえおあいうえおあいうえお
            </p>
            <p>
              あいうえおあいうえおあいうえおあいうえおあいうえおあいうえお
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyProfile;
