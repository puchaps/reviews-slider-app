import React, { useState } from 'react';

import { PEOPLE } from '../data/people.data';

export const PeopleContext = React.createContext();

const PeopleContextProvider = ({children}) => {
  const[collectionPeoples, setCollectionPeoples] = useState(PEOPLE);
  const[currentIndex, setCurrentIndex] = useState(0);

  const nextUserInSlaider = () => {
    setCurrentIndex( currentIndex === collectionPeoples.length - 1 ? 0 : currentIndex + 1);
  };

  const prevUserInSlaider = () => {
    setCurrentIndex( currentIndex === 0 ? collectionPeoples.length - 1 : currentIndex - 1);
  };
  
  return (
    <PeopleContext.Provider value = {{
      collectionPeoples,
      currentIndex,
      nextUserInSlaider,
      prevUserInSlaider
    }}>
      {children}
    </PeopleContext.Provider>
  );
};

export default PeopleContextProvider;