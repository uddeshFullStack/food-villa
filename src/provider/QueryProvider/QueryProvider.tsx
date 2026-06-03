import React from "react";
import { QueryClientProvider } from "react-query";
import { queryClient } from "./queryClient";

export function QueryProvider({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
