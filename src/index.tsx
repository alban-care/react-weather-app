import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App.tsx";
import { RecoilRoot } from "recoil";
import CustomThemeProvider from "./CustomThemeProvider.tsx";

const root = document.getElementById("root");

ReactDOM.createRoot(root as HTMLElement).render(
  <React.StrictMode>
    <RecoilRoot>
      <CustomThemeProvider>
        <App />
      </CustomThemeProvider>
    </RecoilRoot>
  </React.StrictMode>
);
