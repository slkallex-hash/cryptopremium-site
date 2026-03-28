/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Article } from "./pages/Article";
import { Category } from "./pages/Category";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { PrivacyPolicy } from "./pages/PrivacyPolicy";
import { TermsOfUse } from "./pages/TermsOfUse";
import { RiskDisclaimer } from "./pages/RiskDisclaimer";
import { AuthorPage } from "./pages/AuthorPage";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Premium } from "./pages/Premium";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="article/:slug" element={<Article />} />
          <Route path="category/:slug" element={<Category />} />
          <Route path="author/:authorId" element={<AuthorPage />} />
          <Route path="sobre" element={<About />} />
          <Route path="contato" element={<Contact />} />
          <Route path="privacidade" element={<PrivacyPolicy />} />
          <Route path="termos" element={<TermsOfUse />} />
          <Route path="aviso-de-risco" element={<RiskDisclaimer />} />
          <Route path="login" element={<Login />} />
          <Route path="cadastro" element={<Register />} />
          <Route path="premium" element={<Premium />} />
        </Route>
      </Routes>
    </Router>
  );
}
