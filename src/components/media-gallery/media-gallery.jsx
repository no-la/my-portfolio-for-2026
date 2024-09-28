/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import { useState } from 'react';
import ThumbnailCarousel from './thumbnail-carousel';
import { useRef } from 'react';
import { forwardRef } from 'react';
import { useImperativeHandle } from 'react';

const width = '520px';
const wrapStyle = (theme) => css`
  display: flex;
  flex-direction: column;
  width: ${width};
`;
const mainViewStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: 440px;
`;
const mainMediaStyle = css`
  width: ${width};
  max-height: 440px;
  object-fit: contain;
`;

const MediaGallery = forwardRef(
  ({ items, galleryStyle, carouselStyle }, ref) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const videoRef = useRef(null);

    useImperativeHandle(ref, () => ({
      pauseVideo() {
        if (videoRef.current) {
          videoRef.current.pause();
        }
      },
    }));

    return (
      <div css={[wrapStyle, galleryStyle]}>
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
              ref={videoRef}
              controls
            ></video>
          )}
        </div>
        <ThumbnailCarousel
          items={items}
          selectedIndex={currentIndex}
          onNext={() =>
            setCurrentIndex(
              (currentIndex + 1) % items.length,
            )
          }
          onPrev={() =>
            setCurrentIndex(
              (((currentIndex - 1) % items.length) +
                items.length) %
                items.length,
            )
          }
          onSelect={(i) => setCurrentIndex(i)}
          style={carouselStyle}
        />
      </div>
    );
  },
);

export default MediaGallery;
