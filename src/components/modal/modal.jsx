/** @jsxImportSource @emotion/react */

const Modal = ({ onClose, isActive, style, children }) => {
  return (
    <div
      css={{
        display: isActive ? 'flex' : 'none',
        position: 'fixed',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        backgroundColor: 'rgb(0 0 0/0.3)',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      onClick={(e) => {
        e.stopPropagation();
        onClose();
      }}
    >
      <div
        css={[
          (theme) => ({
            backgroundColor: theme.colors.background,
          }),
          style,
        ]}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
