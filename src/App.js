import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import SearchPage from "./pages/SearchPage";
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
        <Router>
          <section>
            <Route path="/homepage" component={SearchPage} />
            <Route path="/savedrecipes" component={SavedRecipes} />
            <Route path="/recipepage" component={RecipePage} />
            <Route path="/" exact component={LandingPage} />
          </section>
        </Router>
      </ThemeProvider>
    </main>
  );
};

export default App;
