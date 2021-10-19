import { TReview } from '../../types/review';
import Review from '../review/review';

type TReviewListProps = {
  reviews: TReview[]
}

function ReviewList({reviews}: TReviewListProps): JSX.Element {
  return (
    <ul className="reviews__list">
      {reviews.map((review) => (
        <Review review={review} key={review.id}/>
      ))}
    </ul>
  );
}

export default ReviewList;
