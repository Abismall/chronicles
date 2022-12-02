import {
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit'
import { RootState } from '../../app/store';




const chapterAdapter = createEntityAdapter<State.Chapter>({
    selectId: (chapter) => chapter.id,
    sortComparer: (a, b) => a.title.localeCompare(b.title),
})

const initialState = chapterAdapter.getInitialState();

const chapterSlice = createSlice({
  name: 'chapters',
  initialState: initialState,
  reducers: {
    // Can pass adapter functions directly as case reducers.  Because we're passing this
    // as a value, `createSlice` will auto-generate the `bookAdded` action type / creator
    chapterAdded: chapterAdapter.addOne,
    chaptersReceived(state, action) {
      // Or, call them as "mutating" helpers in a case reducer
      chapterAdapter.setAll(state, action.payload)
    },
  },
})



export const {
  selectById: selectChapterById,
  selectIds: selectChapterIds,
  selectEntities: selectChapterEntities,
  selectAll: selectAllChapters,
  selectTotal: selectTotalChapters
} = chapterAdapter.getSelectors<RootState>((state) => state.chapters)
export default chapterSlice