import React from "react";

import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import { AppThemeProvider } from "./shared/contexts";
import { DarkTheme, LightTheme } from "./shared/themes";

export const App = () => {
  return (
      <AppThemeProvider>
        <BrowserRouter>
        <AppRoutes />
        </BrowserRouter>
      </AppThemeProvider>
  );
};

export default App;
