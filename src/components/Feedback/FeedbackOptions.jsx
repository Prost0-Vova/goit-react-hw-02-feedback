import PropTypes from 'prop-types';
import {Button} from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map(option => (
        <Button
          type="button"
          key={option}
          onClick={() => onLeaveFeedback()}
        ></Button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
    options: PropTypes.number.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
  };

export default FeedbackOptions;
