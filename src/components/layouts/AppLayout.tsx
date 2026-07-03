import Line from "../ui/Line";
import Header from "./Header";
import BreadCrumbsSection from "../pages/BreadCrumbsSection";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <Line />
      <main className="App">
        <BreadCrumbsSection />
        {children}
      </main>
    </>
  );
};

export default AppLayout;
