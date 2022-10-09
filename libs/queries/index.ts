import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import axios, { AxiosError, AxiosRequestConfig } from "axios";

const useAxios =
  <
    TResponse,
    TData extends AxiosRequestConfig["data"],
    TParams extends AxiosRequestConfig["params"]
  >(
    url: string,
    method: AxiosRequestConfig["method"],
    data?: TData,
    params?: TParams
  ) =>
  async (): Promise<TResponse> => {
    try {
      const res = await axios({
        url,
        method,
        data,
        params,
      });
      return res.data;
    } catch (e: unknown) {
      throw new Error(`${e}`);
    }
  };

export const useGetServiceQuery = <
  T,
  TReturn = any,
  TData = any,
  TError = AxiosError
>(
  params?: any,
  options?: UseQueryOptions<TReturn, TError, TData>
) =>
  useQuery<TReturn, TError, TData>(
    ["getService", `${JSON.stringify(params)}`],
    useAxios(
      "/api/services/id",
      "get",
      {},
      { params: `${JSON.stringify(params)}` }
    ),
    options
  );
