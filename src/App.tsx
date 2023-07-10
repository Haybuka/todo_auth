import { Route, Routes } from 'react-router-dom';
import Login from './pages/login';
import Home from './pages/home';
import Targets from './pages/targets';

function App() {
  return (
    <main className="w-screen h-screen overflow-hidden flex justify-center items-center  ">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path=":name" element={<Home />} />
        <Route path=":name/target" element={<Targets />} />
      </Routes>
    </main>
  );
}

export default App;
