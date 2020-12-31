import React from "react";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import CardGrid from "./components/CardGrid";

const App = () => {
  return (
    <main className="mainPage">
      <Navigation />
      <section>
        <CardGrid />
      </section>
      <Footer />
    </main>
  );
};

export default App;
