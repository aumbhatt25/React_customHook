import { useEffect, useState } from 'react';

var c=0;
function useCounter(forward = true){
    const [counter, setCounter] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        if(forward){
          setCounter(counter => counter+1);
        }
        else{ setCounter(counter => counter-1) };
      }, 1000)
      console.log(interval + 'and' + (c++));

      return () => clearInterval(interval);
    }, [forward])
  
    return counter;
  }

export default useCounter;