import { selectGroupById } from './groupSlice';
import { useAppSelector } from '../../hooks/hooks';
import { EntityId } from '@reduxjs/toolkit';
import { useNavigate } from 'react-router-dom';
interface GroupExcerptProps {
  id: EntityId;
}
const ChapterExcerpt = (props: GroupExcerptProps) => {
  const { id } = props;
  const chapter = useAppSelector((state) =>
    selectGroupById(state, id)
  );
  const navigate = useNavigate();
  const openGroup = (groupId: EntityId) => {
    navigate({
      pathname: `/groups/${groupId}`,
    });
  };
  if (chapter) {
    return (
      <>
        <div>
          <button onClick={() => openGroup(id)}>
            {chapter.title}
          </button>
        </div>
      </>
    );
  } else {
    return (
      <>
        <p>Could not load group</p>
      </>
    );
  }
};

export default ChapterExcerpt;
