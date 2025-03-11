import React, { useEffect, useState } from 'react';

export default function QxtUseEffect1() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log("useEffect: (callback)");
    });

    useEffect(() => {
        console.log("useEffect: (callback),[]; chỉ 1 lần duy nhất (reonly)");
    }, []);

    useEffect(() => {
        console.log("Count has changed:", count);
    });

  return (
    <div>
        <h2 className='alert alert-danger'>useEffect (callback)</h2>
        <h2>Count: {count}</h2>
        <button onClick={() => setCount(count + 1)}>Click</button>
    </div>
  );
}
