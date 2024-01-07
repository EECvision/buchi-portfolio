import Commehub from "../../components/Commehub/Commehub";
import Loader from "../../components/Loader/Loader";
import useDelay from "../../hooks/useDelay";

const CommehubPage = () => {
  const delay = useDelay();

  return (
    <>
      <Loader loading={!delay} />
      <Commehub />
    </>
  );
};

export default CommehubPage;
