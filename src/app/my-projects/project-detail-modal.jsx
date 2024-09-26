/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import Modal from '../../components/modal/modal';
import SectionHeader from '../../components/section-header/section-header';
import TagList from '../../components/tag-list/tag-list';
import MediaGallery from '../../components/media-gallery/media-gallery';
import ModalHeader from '../../components/modal/modal-header';

const contentWrapStyle = css`
  display: grid;
  grid-template-areas: 'text media';
  padding: 30px;
  gap: 30px;
  flex-wrap: wrap-reverse;

  @media (max-width: 1000px) {
    grid-template-areas:
      'media'
      'text';
  }
`;
const detailWrapStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
  max-width: 640px;
  grid-area: text;
`;
const imageWrapStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  grid-area: media;
`;
const detailInformationWrapStyle = css`
  display: grid;
  grid-template-columns: auto auto auto;
`;

const ProjectDetailModal = ({
  isOpen,
  onClose,
  name,
  tags,
  text,
  duration,
  since,
  until,
  headcount,
  links,
  images,
}) => {
  return (
    <div>
      <Modal
        isActive={isOpen}
        onClose={onClose}
        style={css`
          @media (max-width: 1000px) {
            position: absolute;
            top: 10%;
          }
        `}
      >
        <ModalHeader>{name}</ModalHeader>
        <div css={contentWrapStyle}>
          <div css={detailWrapStyle}>
            <div>
              {text.map((t, i) => (
                <p key={i}>{t}</p>
              ))}
            </div>
            <div css={detailInformationWrapStyle}>
              <span>開発期間</span>
              <span>:</span>
              <span>{`${duration} ( ${since}～${until} )`}</span>
              <span>開発人数</span>
              <span>:</span>
              <span>{headcount} 人</span>
              <span>使用技術</span>
              <span>:</span>
              <TagList tags={tags} />
            </div>
            <div>
              {links.map((url, i) => (
                <a href={url} key={i}>
                  {url}
                </a>
              ))}
            </div>
          </div>
          <div css={imageWrapStyle}>
            <MediaGallery items={images} />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ProjectDetailModal;
