import { Route, Routes } from "react-router-dom";
import HomePage from "../components/pages/HomePage";

import NotFound from "./NotFound";
import FormPage from "../components/pages/FormPage";
import TodoPage from "../components/pages/TodoPage";
import CounterApp from "../components/pages/CounterApp";
import Signup from "../components/features/auth-forms/Signup";
import Signin from "../components/features/auth-forms/Signin";
import CustomHookPage from "../components/pages/CustomHookPage";
import DebouncedSearchPage from "../components/pages/DebouncedSearchPage";
import BreadCrumbsSection from "../components/pages/BreadCrumbsSection";

const AppRouter = () => {
  return (
    <Routes>
      {/* Root Route */}
      <Route path="/" element={<HomePage />} />

      {/* Auth forms as standalone pages */}
      <Route path="/forms/signup" element={<Signup />} />
      <Route path="/forms/signin" element={<Signin />} />

      {/* Nested Form Routes */}
      <Route path="forms" element={<FormPage />}>
        {/* <Route path="signup" element={<Signup />} />
            <Route path="signin" element={<Signin />} /> */}
      </Route>

      {/* Feature Routes */}
      <Route path="counter-app" element={<CounterApp />} />
      <Route path="custom-hook" element={<CustomHookPage />} />
      <Route path="todo-app" element={<TodoPage />} />
      <Route path="debounce-search" element={<DebouncedSearchPage />} />

      <Route path="bread-crumbs" element={<BreadCrumbsSection />} />

      {/* Catch-All Route */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;
