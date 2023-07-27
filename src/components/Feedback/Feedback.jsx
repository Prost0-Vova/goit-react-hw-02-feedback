import PropTypes from 'prop-types';
import { Container, FeedbackContainer, FeedbackText, FeedbackBtn, Statistics, StatisticsSpan} from './Feedback.styled';








export const Feedback = () => {
return(
<Container>
<FeedbackContainer>

<FeedbackText>Please leave feeback</FeedbackText>

<FeedbackBtn>Good</FeedbackBtn>
<FeedbackBtn>Neutral</FeedbackBtn>
<FeedbackBtn>Bad</FeedbackBtn>

</FeedbackContainer>

<Statistics>
<StatisticsSpan>

</StatisticsSpan>

</Statistics>


</Container>


)




}