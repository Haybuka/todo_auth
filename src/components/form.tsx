import { ChangeEvent, FormEvent, useState } from 'react';
import { AccountType } from '../pages/login';
import { useNavigate } from 'react-router-dom';

interface Props {
  account: AccountType;
}

type FormChange = ChangeEvent<HTMLInputElement>;
type FormSubmit = FormEvent<HTMLFormElement>;
const LoginForm = ({ account }: Props) => {
  const [password, setPassword] = useState('');
  const [routeName, setRouteName] = useState('/');
  const navigate = useNavigate();

  const handleChange = (event: FormChange) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: FormSubmit) => {
    event.preventDefault();
    setRouteName(account.value);
    navigate(`${routeName}`);
  };

  return (
    <form className="my-6 flex flex-col items-center" onSubmit={handleSubmit}>
      <label className="block px-20">
        <input
          type="password"
          name=""
          id=""
          className="w-full border-2 rounded-md py-1 px-3 outline-none"
          placeholder="Enter your password"
          value={password}
          onChange={handleChange}
        />
      </label>
      <button
        type="submit"
        className="uppercase inline-block bg-black text-white py-2 px-6 rounded-md text-sm my-3"
      >
        log in
      </button>
    </form>
  );
};

export default LoginForm;
