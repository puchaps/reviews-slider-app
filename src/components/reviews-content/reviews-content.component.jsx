import { useContext } from "react";
import { PeopleContext } from "../../context/people.content";

import './reviews-content.styles.scss';

import CustomArrow from "../custom-arrow/custom-arrow.component";
import ReviewItem from '../review-item/review-item.component';

const ReviewsContent = () => {
  const{
    collectionPeoples,
    currentIndex, 
    nextUserInSlaider,
    prevUserInSlaider
  }= useContext(PeopleContext);

  const showCurrentUser = collectionPeoples.map((item, index) => {
    return (
      <div 
        className = {`${currentIndex === index ? 'collection-active' : 'collection'}`}
        key = {item.id}  
      >
        {currentIndex === index && <ReviewItem key = {item.id} {...item}/>}
      </div>
    )
  })
  
  return (
    <div className="reviews-content">
        <CustomArrow typeArrow = 'prev' onClick = {prevUserInSlaider}>
          &#171;
        </CustomArrow>
        {
          showCurrentUser
        }
        <CustomArrow typeArrow = 'next' onClick = {nextUserInSlaider}>
          &#187;
        </CustomArrow>
    </div>
  );
};

export default ReviewsContent;