import { useState } from 'react';
import Select from '../components/select';
import LoginForm from '../components/form';
import profileImg from '../images/Arya.webp';
import Container from '../components/container';
export type AccountType = {
  name: string;
  value: string;
  img: string;
  id: number;
};
const Login = () => {
  const [profile, setAccountName] = useState<AccountType>({
    name: 'arya',
    value: 'arya',
    id: 1,
    img: '',
  });

  const handleAccountChange = (profile: AccountType) => {
    setAccountName(profile);
  };
  return (
    <Container>
      <Select accountChange={handleAccountChange} />
      <p className="my-6 overflow-hidden">
        <img
          src={profileImg}
          className="rounded-full h-24 w-24 bg-gray-200 p-2 mx-auto"
        />
      </p>
      <h3 className="text-center">
        <p>Welcome back.</p>
        <p className="font-semibold capitalize">{profile.name}</p>
      </h3>
      <LoginForm account={profile} />
      <p className="text-center text-blue-800 my-3">unable to log in?</p>
    </Container>
  );
};

export default Login;
