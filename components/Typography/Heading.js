import PropTypes from "prop-types";

function Heading({ className, size = "1", children }) {
  const Heading = `h${size}`;

  return <Heading className={className}>{children}</Heading>;
}

Heading.propTypes = {
  size: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Heading;
