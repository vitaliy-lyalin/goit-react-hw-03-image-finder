import { ErrorPageWrapper } from './ErrorPage.styled';
import { PropTypes } from 'prop-types';

const ErrorPage = ({ text }) => {
  return <ErrorPageWrapper>{text}</ErrorPageWrapper>;
};

ErrorPage.propTypes = {
  text: PropTypes.string.isRequired,
};

export default ErrorPage;
