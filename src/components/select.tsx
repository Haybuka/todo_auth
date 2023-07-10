import { ChangeEvent } from 'react';

interface Props {
  accountChange: (person: AccountType) => void;
}

type SelectChange = ChangeEvent<HTMLSelectElement>;
type AccountType = { name: string; value: string; img: string; id: number };

const Select = ({ accountChange }: Props) => {
  const accountData = [
    {
      name: 'Change Account',
      value: 'arya',
      img: '',
      id: 1,
    },
    {
      name: 'The hound',
      value: 'hound',
      img: '',
      id: 2,
    },
    {
      name: 'cersei',
      value: 'cersei',
      img: '',
      id: 3,
    },
    {
      name: 'jon snow',
      value: 'snow',
      img: '',
      id: 4,
    },
  ];
  const selectChange = (event: SelectChange) => {
    const accountId = event.target.value;
    const profile = accountData.filter(
      (account: AccountType) => account.id === Number(accountId)
    );

    accountChange(profile[0]);
  };

  return (
    <div className="flex justify-end">
      <select
        name="userType"
        id="userType"
        className="p-2 my-2 outline-none border-0 capitalize"
        onChange={selectChange}
      >
        {accountData.map((account) => (
          <option value={account.id} key={account.id}>
            {account.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
