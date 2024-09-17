import './background.css';

// set "position: relative" to parent elem
const Background = ({ className }) => {
  return <div className={`background ${className}`}></div>;
};

export default Background;
