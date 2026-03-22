/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Article } from "./pages/Article";
import { Category } from "./pages/Category";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="article/:slug" element={<Article />} />
          <Route path="category/:id" element={<Category />} />
        </Route>
      </Routes>
    </Router>
  );
}
