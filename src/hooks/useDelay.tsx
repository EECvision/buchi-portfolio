import { useEffect, useState } from "react";

const useDelay = () => {
  const [delay, setDelay] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setDelay(false);
    }, 450);
  }, []);

  return delay;
};

export default useDelay;
