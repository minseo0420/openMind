import React from "react";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import ReactDOM from "react-dom/client";
import App from "./App";

//Create a client
const queryClient = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
     <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);
