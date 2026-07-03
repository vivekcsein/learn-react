import { BrowserRouter } from "react-router-dom";
import AppRouter from "./AppRouter";
import AppLayout from "../components/layouts/AppLayout";
import { AuthProvider } from "../components/providers/AuthProvider";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <AppLayout>
            <AppRouter />
          </AppLayout>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
