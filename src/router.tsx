import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Suspense({ component: Component }: any) {
  return (
    <React.Suspense fallback={<>...</>}>
      <Component />
    </React.Suspense>
  );
}

const UpdateCart = React.lazy(() => import("./pages/update-cart"));

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="update-cart"
          element={<Suspense component={UpdateCart} />}
        />
        <Route path="/" element={<Suspense component={UpdateCart} />} />
      </Routes>
    </BrowserRouter>
  );
}
