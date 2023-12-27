import ReactDOM from "react-dom/client";
import "./main.css";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import { Layout } from "./components/layout";
import LandingPage from "./components/LandingPage/LandingPage";
import PlaygroundPage from "./pages/playground";
import CursorContextProvider from "./context/cursor/CursorContext";
import CreeoPage from "./pages/projects/creeo";
import CommehubPage from "./pages/projects/commehub";
import BleuwaterPage from "./pages/projects/bleuwater";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="/" element={<LandingPage />} />
      <Route path="projects" element={<div>Project</div>} />
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
      <RouterProvider router={router} />
    </CursorContextProvider>
  </>
);
