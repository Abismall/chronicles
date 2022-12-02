import { apiSlice } from '../api/apiSlice';
import groupSlice from '../groups/groupSlice';

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getGroups: builder.query<State.Group[], string>({
      query: () => `/groups`,
      onQueryStarted: (_arg, { dispatch, queryFulfilled }) => {
        queryFulfilled.then((response) =>
          dispatch(groupSlice.actions.groupsReceived(response.data))
        );
      },
    }),
  }),
});

export const { useGetGroupsQuery } = extendedApiSlice;
