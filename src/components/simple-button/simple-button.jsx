const SimpleButton = ({ children, className, onClick }) => {
  return (
    <button
      className={`simple-button ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default SimpleButton;
