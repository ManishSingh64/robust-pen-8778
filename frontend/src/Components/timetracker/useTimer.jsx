import { useState } from 'react';



export const useTimer = ({time}) => {
    const [timerId, setTimerId] = useState(null);
    const [watch, setWatch] = useState(time || 0);
    const [showButton, setShowButton] = useState(true);  

    const start = () => {
      setShowButton(false);
        if (!timerId) {
          let id = setInterval(() => {
            setWatch((prev) => prev + 1);
          }, 1000);
          setTimerId(id);
        }
      };
    
      const pause = () => {
        setShowButton(true);
        clearInterval(timerId);
        setTimerId(null);
      };

  return {watch, showButton, start, pause};
};



