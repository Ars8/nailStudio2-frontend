import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Comments from "../../components/Comments";
import { fetchReviews } from "../../store/ducks/reviews/actionCreators";
import { selectReviewsItems } from "../../store/ducks/reviews/selectors";

import "./review.css";

const Review: React.FC = () => {
  const dispatch = useDispatch();
  const reviews = useSelector(selectReviewsItems);

  React.useEffect(() => {
    dispatch(fetchReviews());
  }, [dispatch]);

  return (
    <div className="review__block">
      {reviews.map((review) => (
        <Comments
          author={review.author}
          review={review.review}
          date={review.date}
          avatar={review.avatar}
        />
      ))}
    </div>
  );
};

export default Review;
