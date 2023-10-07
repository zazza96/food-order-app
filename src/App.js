import React, {Fragment} from "react";
import Header from "./components/Layout/Header/Header";
import Meals from "./components/Meals/Meals";

function App() {
  return (
    <Fragment>
      <Header>Uncle Z's food store</Header>
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
