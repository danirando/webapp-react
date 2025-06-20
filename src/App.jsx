import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DefaultLayout from "./layouts/DefaultLayout";
import MovieShowPage from "./pages/MovieShowPage";
import { LoaderProvider } from "./contexts/LoaderContext";

export default function App() {
  return (
    <>
      <LoaderProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayout />}>
              <Route path="/" element={<HomePage />}></Route>
              <Route path="/movie/:id" element={<MovieShowPage />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </LoaderProvider>
    </>
  );
}
