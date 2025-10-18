import Line from "../components/ui/Line";
import Header from "../components/layouts/Header";
import BreadCrumbsSection from "../components/pages/BreadCrumbsSection";

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
