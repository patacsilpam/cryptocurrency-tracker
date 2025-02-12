import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { SidebarProvider } from "./components/common/Sidebar";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SidebarProvider>
      {" "}
      <App />
    </SidebarProvider>
  </StrictMode>
);
