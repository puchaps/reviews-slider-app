import ReviewsContainer from "./components/reviews-container/reviews-container.component";
import PeopleContextProvider from "./context/people.content";

const App = () =>  {
  return (
    <PeopleContextProvider>
      <ReviewsContainer/>
    </PeopleContextProvider>
  );
}

export default App;
