import { selectChapterById } from './chapterSlice';
import { useAppSelector } from '../../hooks/hooks';
import { EntityId } from '@reduxjs/toolkit';
import {
  Link,
  createSearchParams,
  useNavigate,
} from 'react-router-dom';

interface ChapterExcerptProps {
  id: EntityId;
}

const ChapterExcerpt = (props: ChapterExcerptProps) => {
  const { id } = props;
  const chapter = useAppSelector((state) =>
    selectChapterById(state, id)
  );
  const navigate = useNavigate();
  const openChapter = (chapterId: EntityId) => {
    navigate({
      pathname: `/chapters/${chapterId}`,
    });
  };
  if (chapter) {
    return (
      <>
        <div>
          <button onClick={() => openChapter(id)}>
            {chapter.title}
          </button>
        </div>
      </>
    );
  } else {
    return (
      <>
        <p>Could not load chapter</p>
      </>
    );
  }
};

export default ChapterExcerpt;
