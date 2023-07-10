import { Route, Routes } from 'react-router-dom';
import Login from './pages/login';

function App() {
  return (
    <main className="w-screen h-screen overflow-hidden flex justify-center items-center">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path=":name" element={<p>oh hi, this is a dynamic route</p>} />
      </Routes>
    </main>
  );
}

export default App;
