
import './reviews-container.styles.scss';

import ReviewsContent from '../reviews-content/reviews-content.component';

const ReviewsContainer = () => {
  return (
    <div className="reviews-container">
      <div className="reviews-container-title">
        <h1>
          Reviews
        </h1>
      </div>
      <ReviewsContent/>
    </div>
  );
};

export default ReviewsContainer;