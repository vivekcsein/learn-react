import { BrowserRouter } from "react-router-dom";
import AppLayout from "./AppLayout";
import AppRouter from "./AppRouter";
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
