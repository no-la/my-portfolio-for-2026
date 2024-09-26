/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import { useState } from 'react';
import ThumbnailCarousel from './thumbnail-carousel';

const wrapStyle = css`
  /* width: 520px; */
  /* height: 440px; */
`;
const mainViewStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 440px;
  margin-bottom: 20px;
`;
const mainMediaStyle = css`
  width: 520px;
  max-height: 440px;
  object-fit: contain;
`;

const MediaGallery = ({ items, style }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div css={[wrapStyle, style]}>
      <div css={mainViewStyle}>
        {items[currentIndex].type === 'image' ? (
          <img
            src={items[currentIndex].mainSrc}
            alt={`main-media-${currentIndex}`}
            css={mainMediaStyle}
          />
        ) : (
          <video
            src={items[currentIndex].mainSrc}
            css={mainMediaStyle}
            controls
          ></video>
        )}
      </div>
      <ThumbnailCarousel
        items={items}
        selectedIndex={currentIndex}
        onNext={() =>
          setCurrentIndex((currentIndex + 1) % items.length)
        }
        onPrev={() =>
          setCurrentIndex(
            (((currentIndex - 1) % items.length) +
              items.length) %
              items.length,
          )
        }
        onSelect={(i) => setCurrentIndex(i)}
      />
    </div>
  );
};

export default MediaGallery;
