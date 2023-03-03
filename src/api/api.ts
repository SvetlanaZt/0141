import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { IData } from '../redux/slice/type';

export const tasksApi = createApi({
  reducerPath: 'tasksApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://63fe1ab4571200b7b7c5399a.mockapi.io' }),
  endpoints: (build) => ({
    getDataUser: build.query<IData, string>({
      query: () => `/test/user/18`
    }),
    getDataAllUsers: build.query<IData[], string>({
      query: () => `/test/user`
    }),
  }),
})

export const { useGetDataUserQuery, useGetDataAllUsersQuery } = tasksApi;