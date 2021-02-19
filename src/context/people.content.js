/* eslint-disable no-unused-vars */
import React, { useState } from "react";

import peoples from "../data/people.data";

export const PeopleContext = React.createContext();

const PeopleContextProvider = ({ children }) => {
  const [collectionPeoples, setCollectionPeoples] = useState(peoples);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextUserInSlider = () => {
    setCurrentIndex(
      currentIndex === collectionPeoples.length - 1 ? 0 : currentIndex + 1
    );
  };

  const prevUserInSlider = () => {
    setCurrentIndex(
      currentIndex === 0 ? collectionPeoples.length - 1 : currentIndex - 1
    );
  };

  return (
    <PeopleContext.Provider
      value={{
        collectionPeoples,
        currentIndex,
        nextUserInSlider,
        prevUserInSlider,
      }}
    >
      {children}
    </PeopleContext.Provider>
  );
};

export default PeopleContextProvider;
