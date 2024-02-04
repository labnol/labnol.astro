import { useState } from 'react';

export const ReactButton = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => setCount(count + 1);
  return (
    <button
      onClick={handleClick}
      className="mt-6 bg-gray-200 p-2 shadow-lg rounded hover:bg-gray-300"
    >
      Clicked {count} times
    </button>
  );
};
