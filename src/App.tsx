import Select from './components/select';
import LoginForm from './components/form';

function App() {
  return (
    <main className="w-screen h-screen overflow-hidden flex justify-center items-center">
      <section className="w-[380px] shadow-lg bg-white p-2 rounded-lg">
        <Select />
        <p className="bg-gray-200 h-24 w-24 rounded-full mx-auto my-6"></p>
        <h3 className="text-center">
          <p>Welcome back.</p>
          <p className="font-semibold">Arya</p>
        </h3>
        <LoginForm />
        <p className="text-center text-blue-800 my-3">unable to log in?</p>
      </section>
    </main>
  );
}

export default App;
