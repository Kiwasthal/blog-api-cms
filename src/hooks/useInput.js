import { useState } from 'react';

const useInput = initialValue => {
  const [value, sestValue] = useState(initialValue);

  const handleChange = e => {
    sestValue(e.target.value);
    console.log(value);
  };

  return {
    value,
    onChange: handleChange,
  };
};

export default useInput;
