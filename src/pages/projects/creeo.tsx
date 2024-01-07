import Creeo from "../../components/CreeoPage/Creeo";
import Loader from "../../components/Loader/Loader";
import useDelay from "../../hooks/useDelay";

const CreeoPage = () => {
  const delay = useDelay();

  return (
    <>
      <Loader loading={!delay} />
      <Creeo />
    </>
  );
};

export default CreeoPage;
