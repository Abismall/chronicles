import { useGetChaptersQuery } from '../chapters/chapterApiSlice';
import { useAppSelector } from '../../hooks/hooks';
import { selectChapterIds } from './chapterSlice';
import ChapterExcerpt from './chapterExcerpt';

const ChapterList = (): JSX.Element => {
  const { isLoading, isSuccess, isError, error, data } =
    useGetChaptersQuery('getChapters');

  const chapterIds = useAppSelector(selectChapterIds);

  if (isLoading) {
    return (
      <>
        <p>Loading...</p>;
      </>
    );
  }
  if (isError) {
    return (
      <>
        <p>Error</p>
      </>
    );
  }
  return (
    <>
      {isSuccess &&
        chapterIds.map((chapterId) => (
          <ChapterExcerpt id={chapterId} key={chapterId} />
        ))}
    </>
  );
};

export default ChapterList;
