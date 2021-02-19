/* eslint-disable react/jsx-props-no-spreading */
import React, { useContext } from "react";
import { PeopleContext } from "../../context/people.content";

import "./reviews-content.styles.scss";

import CustomArrow from "../custom-arrow/custom-arrow.component";
import ReviewItem from "../review-item/review-item.component";

const ReviewsContent = () => {
  const {
    collectionPeoples,
    currentIndex,
    nextUserInSlider,
    prevUserInSlider,
  } = useContext(PeopleContext);

  return (
    <div className="reviews-content">
      <CustomArrow onTypeArrow="prev" onClick={prevUserInSlider}>
        &#171;
      </CustomArrow>
      {collectionPeoples.map((item, index) => (
        <div
          className={`${
            currentIndex === index ? "collection-active" : "collection"
          }`}
          key={item.id}
        >
          {currentIndex === index && <ReviewItem key={item.id} {...item} />}
        </div>
      ))}
      <CustomArrow onTypeArrow="next" onClick={nextUserInSlider}>
        &#187;
      </CustomArrow>
    </div>
  );
};

export default ReviewsContent;
