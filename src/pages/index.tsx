import LandingPage from "../components/LandingPage/LandingPage";
import Loader from "../components/Loader/Loader";
import useImageLoaded from "../hooks/useImageLoaded";

export default function Home() {
  const imageLoaded = useImageLoaded();

  return (
    <div data-scroll-section>
      <Loader loading={imageLoaded} />
      <LandingPage />
    </div>
  );
}
