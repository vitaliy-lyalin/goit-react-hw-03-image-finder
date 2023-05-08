import { LoadMoreButton } from './Button.styled';

const Button = ({ onClick }) => {
  return <LoadMoreButton onClick={onClick}>Load more</LoadMoreButton>;
};

export default Button;
