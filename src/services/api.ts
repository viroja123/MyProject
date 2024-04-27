// eslint-disable-next-line import/no-extraneous-dependencies
import { BaseQueryFn, createApi, FetchArgs, fetchBaseQuery, FetchBaseQueryError } from '@reduxjs/toolkit/query/react';

import { t } from 'i18next';
import Config from 'react-native-config';



// const { t } = useTranslation(['common']);

const baseQuery = fetchBaseQuery({
    // baseUrl: Config.API_BASE_URL,
    baseUrl: 'http://192.168.2.96:4000/api/v1/',
  });

  const baseQueryWithInterceptor: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (args, api, extraOptions) => {
    const result = await baseQuery(args, api, extraOptions);
    if (result?.error) {
      const error = result.error;
    }
    return result;
  };

  export const api = createApi({
    baseQuery: baseQueryWithInterceptor,
    endpoints: () => ({}),
  });
