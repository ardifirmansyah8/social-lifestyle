import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";

import type { IDonationPayload, ILandingPageResponse } from "@/types";
import { BASE_API_URL } from "@/utils/constant";

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

export const usePaymentMethods = () => {
  return useMutation({
    mutationKey: ["fetch-payment-methods"],
    mutationFn: (amount: number) =>
      axios({
        method: "post",
        url: `${BASE_API_URL}/pay/methods`,
        data: {
          amount,
        },
      }).catch((error: any) => {
        throw new Error(error.response?.data?.message || error.message, {
          cause: error,
        });
      }),
  });
};

export const usePayment = () => {
  return useMutation({
    mutationKey: ["make-payment"],
    mutationFn: (payload: IDonationPayload) =>
      axios({
        method: "post",
        url: `${BASE_API_URL}/pay/inquiry`,
        data: payload,
      }).catch((error: any) => {
        throw new Error(error.response?.data?.message || error.message, {
          cause: error,
        });
      }),
  });
};
