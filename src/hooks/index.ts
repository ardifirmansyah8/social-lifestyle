import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import type { ILandingPageResponse } from "@/types";

export const useFetchLandingPage = () => {
  return useQuery({
    queryKey: ["landing-page-content"],
    queryFn: async (): Promise<ILandingPageResponse> => {
      try {
        const resp = await axios({
          method: "get",
          url: `/api/landing-page`,
        });
        return resp.data;
      } catch (error: any) {
        throw new Error(error.response.data.message || error.message, {
          cause: error,
        });
      }
    },
  });
};
