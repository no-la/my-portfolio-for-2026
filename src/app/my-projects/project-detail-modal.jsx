/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import Modal from '../../components/modal/modal';
import SectionHeader from '../../components/section-header/section-header';
import TagList from '../../components/tag-list/tag-list';

const contentWrapStyle = css`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 30px;
  column-gap: 30px;
`;
const detailWrapStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
`;
const imageWrapStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  console.log(links);
  return (
    <div>
      <Modal
        isActive={isOpen}
        onClose={onClose}
        style={css`
          max-width: 70%;
        `}
      >
        <SectionHeader>{name}</SectionHeader>
        <div css={contentWrapStyle}>
          <div css={detailWrapStyle}>
            <div>
              {text.map((t, i) => (
                <p key={i}>{t}</p>
              ))}
            </div>
            <div css={detailInformationWrapStyle}>
              <span>開発期間</span>
              <span>：</span>
              <span>{`${duration} ( ${since}～${until} )`}</span>
              <span>開発人数</span>
              <span>：</span>
              <span>{headcount} 人</span>
              <span>使用技術</span>
              <span>：</span>
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
            <img
              src={images[0]}
              alt=""
              css={css`
                object-fit: cover;
                width: 450px;
              `}
            />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ProjectDetailModal;
