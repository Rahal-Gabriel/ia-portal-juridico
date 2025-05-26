import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loading from "../components/Loading/Loading";

// Lazy imports
const PageOne = lazy(() => import("../pages/pageOne"));
const HomePage = lazy(() => import("../pages/HomePage")); // novo

interface SuspenseWrapperProps {
  Component: React.FC;
}

function SuspenseWrapper({ Component }: SuspenseWrapperProps) {
  return (
    <Suspense fallback={<Loading />}>
      <Component />
    </Suspense>
  );
}

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SuspenseWrapper Component={HomePage} />} />
        <Route
          path="/pageOne"
          element={<SuspenseWrapper Component={PageOne} />}
        />
      </Routes>
    </BrowserRouter>
  );
}
