import React, { useEffect, useState } from 'react';
 
  function LifecycleDemo() {
 
  useEffect(() => {
    //Được gọi khi component render
    console.log('render!');
    // useEffect trả về một hàm ,
    // hàm trả về đó là đóng vai trò như
    // là componentWillUnmount
    return () => console.log('unmounting...');
  })
 
  return (<code>thanhdong_code</code>);
}
 
export default function Effect3() {
  const [mounted, setMounted] = useState(true);
  const toggle = () => setMounted(!mounted);
  return (
    <>
      {mounted && <LifecycleDemo/>} <hr />
      <button onClick={toggle}>Show/Hide LifecycleDemo</button>
   </>
  );
}