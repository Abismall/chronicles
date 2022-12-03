import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

const groupAdapter = createEntityAdapter<State.Group>({
  selectId: (Group: State.Group) => Group.id,
  sortComparer: (a, b) => a.title.localeCompare(b.title),
});

const initialState = groupAdapter.getInitialState();

const GroupSlice = createSlice({
  name: 'groups',
  initialState: initialState,
  reducers: {
    groupAdded: groupAdapter.addOne,
    groupsReceived(state, action) {
      groupAdapter.setAll(state, action.payload);
    },
  },
});

export const {
  selectById: selectGroupById,
  selectIds: selectGroupIds,
  selectEntities: selectGroupEntities,
  selectAll: selectAllGroups,
  selectTotal: selectTotalGroups,
} = groupAdapter.getSelectors<RootState>((state) => state.groups);
export default GroupSlice;
