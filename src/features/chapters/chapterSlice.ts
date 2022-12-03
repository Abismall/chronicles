import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export const chapterAdapter = createEntityAdapter<State.Chapter>({
  selectId: (chapter) => chapter.id,
  sortComparer: (a, b) => a.title.localeCompare(b.title),
});

export const initialState = chapterAdapter.getInitialState();

const chapterSlice = createSlice({
  name: 'chapters',
  initialState: initialState,
  reducers: {
    chapterAdded: chapterAdapter.addOne,
    chaptersReceived(state, action) {
      chapterAdapter.setAll(state, action.payload);
    },
  },
});

export const {
  selectById: selectChapterById,
  selectIds: selectChapterIds,
  selectEntities: selectChapterEntities,
  selectAll: selectAllChapters,
  selectTotal: selectTotalChapters,
} = chapterAdapter.getSelectors<RootState>((state) => state.chapters);
export default chapterSlice;
