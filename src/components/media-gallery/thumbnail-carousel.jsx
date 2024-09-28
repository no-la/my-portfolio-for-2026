/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';

const height = '90px';

const wrapStyle = (theme) => css`
  display: flex;
  height: ${height};
  width: 100%;
`;
const carouselStyle = (theme) => css`
  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;
  column-gap: 3px;
  padding: 3px 3px 6px 3px;
  background-color: ${theme.colors.background};

  /* justify-content: center; */
  li:first-of-type {
    margin-left: auto;
  }
  li:last-child {
    margin-right: auto;
  }
`;
const nextPrevStyle = css`
  line-height: ${height};
  font-weight: bold;
  text-align: center;
  cursor: pointer;
`;
const thumbnailMediaStyle = css`
  /* width: 100px; */
  height: 100%;
  object-fit: cover;
  cursor: pointer;
`;

const ThumbnailCarousel = ({
  items,
  selectedIndex,
  onSelect,
  onPrev,
  onNext,
  style,
}) => {
  return (
    <div css={wrapStyle}>
      {/* <span css={nextPrevStyle} onClick={onPrev}>
      {'<'}
      </span> */}
      <ul css={[carouselStyle, style]}>
        {items.map((item, i) => (
          <li
            key={`thumbnail-media-${i}`}
            onClick={() => onSelect(i)}
            css={[
              (theme) => {
                if (i != selectedIndex) return null;
                return css`
                  box-shadow:
                    3px 3px ${theme.colors.tertiary},
                    -3px 3px ${theme.colors.tertiary},
                    3px -3px ${theme.colors.tertiary},
                    -3px -3px ${theme.colors.tertiary};
                `;
              },
              css`
                position: relative;
                transition: all 0.2s ease-in-out;
              `,
            ]}
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
                    width: 24px;
                    object-fit: contain;
                    pointer-events: none;
                  `}
                  src="images\play-button.png"
                />
              </>
            )}
          </li>
        ))}
      </ul>
      {/* <span css={nextPrevStyle} onClick={onNext}>
        {'>'}
      </span> */}
    </div>
  );
};

export default ThumbnailCarousel;
