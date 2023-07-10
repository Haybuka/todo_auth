import { useNavigate, useParams } from 'react-router-dom';
import Container from '../components/container';
import LogoutIcon from '../components/Icons/logout';

const Home = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('target');
  };
  return (
    <Container>
      <aside className="flex items-center justify-between bg-white p-2">
        <div className="flex items-center">
          <p className="w-12 h-12 bg-gray-200 rounded-full"></p>
          <h3 className="ml-3 capitalize">{name}</h3>
        </div>
        <div>
          <LogoutIcon />
        </div>
      </aside>
      <aside className=" min-h-[400px]">
        <div
          className="p-3 my-6 mx-4 flex justify-between items-center bg-white rounded-lg cursor-pointer hover:shadow-lg transition-all"
          onClick={handleClick}
        >
          <p>Targets</p>
          <p>4</p>
        </div>
      </aside>
    </Container>
  );
};

export default Home;
