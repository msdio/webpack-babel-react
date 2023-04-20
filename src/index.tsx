import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";

const root = document.getElementById("app") as HTMLElement;
createRoot(root).render(<App />);
