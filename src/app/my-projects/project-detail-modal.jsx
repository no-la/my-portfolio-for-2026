/** @jsxImportSource @emotion/react */

import Modal from '../../components/modal/modal';

const ProjectDetailModal = ({
  isOpen,
  onClose,
  name,
  tags,
  text,
  duration,
  headcount,
}) => {
  return (
    <div>
      <Modal isActive={isOpen} onClose={onClose}>
        もーだる！！
      </Modal>
    </div>
  );
};

export default ProjectDetailModal;
