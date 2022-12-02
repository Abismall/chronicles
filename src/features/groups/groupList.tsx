import { useGetGroupsQuery } from '../groups/groupApiSlice';
import { useAppSelector } from '../../hooks/hooks';
import { selectGroupIds } from './groupSlice';
import GroupExcerpt from './groupExcerpt';

const ChapterList = (): JSX.Element => {
  const { isLoading, isSuccess, isError, error } =
    useGetGroupsQuery('getGroups');

  const chapterIds = useAppSelector(selectGroupIds);

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
          <GroupExcerpt id={chapterId} key={chapterId} />
        ))}
    </>
  );
};

export default ChapterList;
