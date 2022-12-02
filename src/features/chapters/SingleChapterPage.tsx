import { useParams, useNavigate } from 'react-router-dom';
import { selectChapterById } from './chapterSlice';
import { useAppSelector } from '../../hooks/hooks';
import { EntityId } from '@reduxjs/toolkit';

const SingleChapterPage = () => {
  const { chapterId } = useParams();
  const thisChapter = useAppSelector((state) =>
    selectChapterById(state, chapterId as EntityId)
  );
  const navigate = useNavigate();

  if (!thisChapter) {
    return (
      <>
        <p>Chapter not found</p>
      </>
    );
  }
  return (
    <>
      <h2>{thisChapter.title}</h2>
      <p>{thisChapter.id}</p>
      <button onClick={() => navigate(-1)}> Go back </button>
    </>
  );
};
export default SingleChapterPage;
