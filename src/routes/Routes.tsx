import ChapterList from '../features/chapters/chapterList';
import SingleChapterPage from '../features/chapters/SingleChapterPage';
import GroupList from '../features/groups/groupList';
import SingleGroupPage from '../features/groups/SingleGroupPage';
import { Routes, Route } from 'react-router-dom';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/chapters" element={<ChapterList />} />
      <Route
        path="/chapters/:chapterId"
        element={<SingleChapterPage />}
      />

      <Route path="/groups" element={<GroupList />} />
      <Route path="/groups/:groupId" element={<SingleGroupPage />} />
    </Routes>
  );
};

export default AppRoutes;
