import './buttond.css';

const ButtonD = ({ className, onClick, children, hide = true }) => {
  return (
    <button
      style={{ display: `${hide ? 'block' : 'none'}` }}
      className={`but ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
export default ButtonD;
