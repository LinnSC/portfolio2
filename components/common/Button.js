import PropTypes from "prop-types";

export default function Button({ children, className, onClick, href }) {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      <button onClick={onClick} className={className}>
        {children}
      </button>
    </a>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.node,
  className: PropTypes.node,
  onClick: PropTypes.func,
};
