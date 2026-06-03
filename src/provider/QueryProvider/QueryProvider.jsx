import React from "react";
import { QueryClientProvider } from "react-query";
import { queryClient } from "./queryClient";

export function QueryProvider({ children }) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
