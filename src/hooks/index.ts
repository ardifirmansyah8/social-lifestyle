import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import type { IInfo } from "@/types";

export const useFetchNews = () => {
  return useQuery({
    queryKey: ["news"],
    queryFn: async (): Promise<{ data: IInfo[] }> => {
      try {
        const resp = await axios({
          method: "get",
          url: `/api/news?categoryId=0&limit=6&page=1`,
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

export const useFetchPrograms = () => {
  return useQuery({
    queryKey: ["programs"],
    queryFn: async (): Promise<{ data: IInfo[] }> => {
      try {
        const resp = await axios({
          method: "get",
          url: `/api/programs?categoryId=0&limit=6&page=1`,
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
