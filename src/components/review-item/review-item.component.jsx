import React from "react";

import "./review-item.styles.scss";

const ReviewItem = ({ image, name, title, quote }) => (
  <div className="review-item">
    <div className="review-item-image">
      <img src={image} alt="user" />
    </div>
    <div className="review-item-name-job">
      <span className="name">{name}</span>
      <span className="job">{title}</span>
    </div>
    <div className="review-item-quote">{quote}</div>
    <div className="review-item-icon">&#10078;</div>
  </div>
);

export default ReviewItem;
