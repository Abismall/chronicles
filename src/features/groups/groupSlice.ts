import {
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit'
import { RootState } from '../../app/store';

type Group = {
    id: string;
    title: string;
}


const groupAdapter = createEntityAdapter<Group>({
    selectId: (Group: Group) => Group.id,
    sortComparer: (a, b) => a.title.localeCompare(b.title),
})

const initialState = groupAdapter.getInitialState();

const GroupSlice = createSlice({
  name: 'groups',
  initialState: initialState,
  reducers: {
    // Can pass adapter functions directly as case reducers.  Because we're passing this
    // as a value, `createSlice` will auto-generate the `bookAdded` action type / creator
    groupAdded: groupAdapter.addOne,
    groupsReceived(state, action) {
      // Or, call them as "mutating" helpers in a case reducer
      groupAdapter.setAll(state, action.payload)
    },
  },
})



export const {
  selectById: selectGroupById,
  selectIds: selectGroupIds,
  selectEntities: selectGroupEntities,
  selectAll: selectAllGroups,
  selectTotal: selectTotalGroups
} = groupAdapter.getSelectors<RootState>((state) => state.groups)
export default GroupSlice