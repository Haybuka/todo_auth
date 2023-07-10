import Select from './components/select';
import LoginForm from './components/form';
import { useState } from 'react';

type AccountType = { name: string; value: string; img: string; id: number };

function App() {
  const [accountName, setAccountName] = useState<AccountType | undefined>({
    name: 'arya',
    value: 'arya',
    id: 1,
    img: '',
  });

  const handleAccountChange = (profile: AccountType | undefined) => {
    setAccountName(profile);
  };
  return (
    <main className="w-screen h-screen overflow-hidden flex justify-center items-center">
      <section className="w-[380px] shadow-lg bg-white p-2 rounded-lg">
        <Select accountChange={handleAccountChange} />
        <p className="bg-gray-200 h-24 w-24 rounded-full mx-auto my-6"></p>
        <h3 className="text-center">
          <p>Welcome back.</p>
          <p className="font-semibold capitalize">{accountName?.value}</p>
        </h3>
        <LoginForm />
        <p className="text-center text-blue-800 my-3">unable to log in?</p>
      </section>
    </main>
  );
}

export default App;
