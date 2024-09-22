/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';

const height = '60px';

const wrapStyle = css`
  display: flex;
  height: ${height};
  width: 100%;
`;
const carouselStyle = css`
  display: flex;
  width: 100%;
  overflow-x: scroll;
  overflow-y: hidden;
  justify-content: center;
  gap: 4px;

  ::-webkit-scrollbar {
    display: none;
  }
`;
const nextPrevStyle = css`
  line-height: ${height};
  font-weight: bold;
  text-align: center;
`;
const thumbnailMediaStyle = css`
  /* width: 100px; */
  height: 100%;
  object-fit: cover;
`;

const ThumbnailCarousel = ({
  items,
  selectedIndex,
  onSelect,
  onPrev,
  onNext,
}) => {
  return (
    <div css={wrapStyle}>
      <span css={nextPrevStyle} onClick={onPrev}>
        {'<'}
      </span>
      <ul css={carouselStyle}>
        {items.map((item, i) => (
          <li
            key={`thumbnail-media-${i}`}
            onClick={() => onSelect(i)}
            css={(theme) => ({
              borderWidth: '3px',
              borderColor:
                i === selectedIndex
                  ? theme.colors.secondary
                  : 'gray',
              position: 'relative',
            })}
          >
            {item.type == 'image' ? (
              <img
                css={thumbnailMediaStyle}
                src={item.thumbnailSrc}
                alt={`thumbnail-media-${i}`}
              ></img>
            ) : (
              <>
                <img
                  css={thumbnailMediaStyle}
                  src={item.thumbnailSrc}
                  alt={`thumbnail-media-${i}`}
                />
                <img
                  css={css`
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    width: 90%;
                    object-fit: contain;
                  `}
                  src="public\images\play-button.png"
                />
              </>
            )}
          </li>
        ))}
      </ul>
      <span css={nextPrevStyle} onClick={onNext}>
        {'>'}
      </span>
    </div>
  );
};

export default ThumbnailCarousel;
