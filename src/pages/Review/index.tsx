import React from 'react';
import Comments from '../../components/Comments';

import './review.css'

const Review = () => {
  return (
    <div className="review__block">
      <Comments/>
      <Comments/>
      <Comments/>
      <Comments/>
      <Comments/>
      <Comments/>
      <Comments/>  
    </div>
  )
};

export default Review;