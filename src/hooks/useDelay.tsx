import { useEffect, useState } from "react";

const useDelay = () => {
  const [delay, setDelay] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setDelay(false);
    }, 2000);
  }, []);

  return delay;
};

export default useDelay;
