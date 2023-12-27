import Creeo from "../../components/CreeoPage/Creeo";
import useImageLoaded from "../../hooks/useImageLoaded";
import Loader from "../../components/Loader/Loader";

const CreeoPage = () => {
  const imageLoaded = useImageLoaded();

  return (
    <>
      <Loader loading={imageLoaded} />
      <Creeo />
    </>
  );
};

export default CreeoPage;
