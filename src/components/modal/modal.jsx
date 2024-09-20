/** @jsxImportSource @emotion/react */

const Modal = ({
  isOpen,
  onOpen,
  onClose,
  style,
  children,
}) => {
  return (
    <div
      css={{
        position: 'fixed',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        backgroundColor: 'rgb(0 0 0/0.3)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        css={[
          (theme) => ({
            backgroundColor: theme.colors.background,
            minWidth: '400px',
            minHeight: '400px',
          }),
          style,
        ]}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
