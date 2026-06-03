import { QueryClient } from "react-query";

/** Global QueryClient — per-query cache options live in services/<feature>/index.ts */
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});
