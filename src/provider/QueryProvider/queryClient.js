import { QueryClient } from "react-query";
import {
  RESTAURANTS_CACHE_TIME_MS,
  RESTAURANTS_STALE_TIME_MS,
} from "../../constants/api";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
      staleTime: RESTAURANTS_STALE_TIME_MS,
      cacheTime: RESTAURANTS_CACHE_TIME_MS,
    },
  },
});
