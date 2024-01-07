import Bleuwater from "../../components/Bleuwater/Bleuwater";
import Loader from "../../components/Loader/Loader";
import useDelay from "../../hooks/useDelay";

const BleuwaterPage = () => {
  const delay = useDelay();

  return (
    <>
      <Loader loading={!delay} />
      <Bleuwater />
    </>
  );
};

export default BleuwaterPage;
