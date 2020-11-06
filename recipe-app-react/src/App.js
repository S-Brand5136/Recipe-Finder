import React, { Fragment } from "react";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import CardGrid from "./components/CardGrid";

function App() {
  return (
    <Fragment className="mainPage">
      <Navigation />
      <main>
        <CardGrid />
      </main>
      <Footer />
    </Fragment>
  );
}

export default App;
