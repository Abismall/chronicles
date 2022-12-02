import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <>
      <button onClick={() => navigate('/chapters')}>Chapters</button>
      <button onClick={() => navigate('/groups')}>Groups</button>
    </>
  );
};
export default NavBar;
