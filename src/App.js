import React from "react";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import CardGrid from "./components/CardGrid";
import RecipePage from "./components/RecipePage";
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  return (
    <main className="mainPage">
      <Navigation />
      <Router>
        <section>
          <Route path="/" component={CardGrid} exact />
          <Route path="/recipepage" component={RecipePage} />
        </section>
      </Router>
      <Footer />
    </main>
  );
};

export default App;
