import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const LinkButton = ({ to, text }) => (
  <Link to={to}>
    <button>{text}</button>
  </Link>
);

LinkButton.propTypes = {
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default LinkButton;
