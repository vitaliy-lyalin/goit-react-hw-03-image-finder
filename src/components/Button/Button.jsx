import { LoadMoreButton } from './Button.styled';
import PropTypes from 'prop-types';

const Button = ({ onClick }) => {
  return <LoadMoreButton onClick={onClick}>Load more</LoadMoreButton>;
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;
