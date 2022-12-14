import { useParams, useNavigate } from 'react-router-dom';
import { selectGroupById } from './groupSlice';
import { useAppSelector } from '../../hooks/hooks';
import { EntityId } from '@reduxjs/toolkit';

const SingleGroupPage = () => {
  const { groupId } = useParams();
  const thisGroup = useAppSelector((state) =>
    selectGroupById(state, groupId as EntityId)
  );
  const navigate = useNavigate();

  if (!thisGroup) {
    return (
      <>
        <p>Group not found</p>
      </>
    );
  }
  return (
    <>
      <h2>{thisGroup.title}</h2>
      <p>{thisGroup.id}</p>
      <button onClick={() => navigate(-1)}> Go back </button>
    </>
  );
};
export default SingleGroupPage;
