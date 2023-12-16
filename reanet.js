// const a = {a: 2};

// const b = a;

// b.b = 3;

// a, b

import { useState, useEffect } from 'react';

export default function Demo() {
  const [count, setCount] = useState(10);

  useEffect(() => {
    let interval;
    if (count <= 0) {
      return false;
    } else {
      interval = setInterval(() => {
        setCount(count - 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [count]);
  return <div>{count}</div>;
}
