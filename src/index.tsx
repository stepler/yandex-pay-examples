import React from "react";
import ReactDOMClient from "react-dom/client";

import { configureRootTheme } from "@yandex/ui/Theme";
import { theme } from "@yandex/ui/Theme/presets/default";

import { Router } from "./router";

configureRootTheme({ theme });

const rootElement = document.getElementById("root");

ReactDOMClient.createRoot(rootElement).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
