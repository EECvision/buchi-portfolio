import ReactDOM from "react-dom/client";
import "./main.css";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import { Suspense, lazy } from "react";
import CursorContextProvider from "./context/cursor/CursorContext";

const Layout = lazy(() => import("./components/layout"));
const Home = lazy(() => import("./pages"));
const CreeoPage = lazy(() => import("./pages/projects/creeo"));
const CommehubPage = lazy(() => import("./pages/projects/commehub"));
const BleuwaterPage = lazy(() => import("./pages/projects/bleuwater"));
const PlaygroundPage = lazy(() => import("./pages/playground"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="playground" element={<PlaygroundPage />} />
      <Route path="work/creeo" element={<CreeoPage />} />
      <Route path="work/commehub" element={<CommehubPage />} />
      <Route path="work/bleuwater" element={<BleuwaterPage />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <CursorContextProvider>
      <Suspense fallback={<>Hello world</>}>
        <RouterProvider router={router} />
      </Suspense>
    </CursorContextProvider>
  </>
);
