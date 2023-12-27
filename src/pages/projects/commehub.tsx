import Commehub from "../../components/Commehub/Commehub";
import useImageLoaded from "../../hooks/useImageLoaded";
import Loader from "../../components/Loader/Loader";

const CommehubPage = () => {
  const imageLoaded = useImageLoaded();

  return (
    <>
      <Loader loading={imageLoaded} />
      <Commehub />
    </>
  );
};

export default CommehubPage;
