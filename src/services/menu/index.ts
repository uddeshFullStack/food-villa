import { useQuery } from "react-query";
import { QUERY_KEYS } from "../../constants/api";
import { useToast } from "../../utils/toastHelper";
import { getRestaurantMenu } from "./api";
import type { RestaurantMenu } from "./types";

const MENU_STALE_TIME = 10 * 60 * 1000;

export const useGetRestaurantMenu = () => {
  const toast = useToast();

  return useQuery<RestaurantMenu>([QUERY_KEYS.MENU_CATEGORY], getRestaurantMenu, {
    staleTime: MENU_STALE_TIME,
    cacheTime: MENU_STALE_TIME * 2,
    refetchOnWindowFocus: false,
    onError: () => {
      toast.error("Failed to load menu", "Please try again later.");
    },
  });
};
