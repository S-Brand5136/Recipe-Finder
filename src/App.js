import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import SavedRecipes from "./pages/SavedRecipes";
import RecipePage from "./pages/RecipePage";
import { createMuiTheme, CssBaseline, ThemeProvider } from "@material-ui/core";

const App = () => {
  const theme = createMuiTheme({
    typography: {
      fontFamily: "Montserrat",
    },
    overrides: {
      MuiCssBaseline: {
        "@global": {
          "@font-face": "Montserrat",
        },
      },
    },
  });

  return (
    <main className="mainPage">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navigation />
        <Router>
          <section>
            <Route path="/" exact component={HomePage} />
            <Route path="/savedrecipes" component={SavedRecipes} />
            <Route path="/recipepage" component={RecipePage} />
          </section>
        </Router>
        <Footer />
      </ThemeProvider>
    </main>
  );
};

export default App;
