//—————————————————————————————————————————————————————————————————
// Imports
//—————————————————————————————————————————————————————————————————

import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AppLoader } from "./components/common";

//—————————————————————————————————————————————————————————————————
// Lazy page imports
//—————————————————————————————————————————————————————————————————

const HomePage = lazy(() => import("./pages/home/HomePage"));

//—————————————————————————————————————————————————————————————————
// App Component
//—————————————————————————————————————————————————————————————————

export const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<AppLoader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};
