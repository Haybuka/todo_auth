import React from 'react';

const Select = () => {
  return (
    <div className="flex justify-end">
      <select
        name="userType"
        id="userType"
        className="p-2 my-2 outline-none border-0 capitalize"
      >
        <option value="">change account</option>
        <option value="">the hound</option>
        <option value="">cersei</option>
        <option value="">cerseiJohn snow</option>
      </select>
    </div>
  );
};

export default Select;
