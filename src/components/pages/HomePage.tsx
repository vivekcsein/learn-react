import Link from "../ui/Link";
import { HeadingText, VerticalListGroup } from "../ui/StyledUI";

const HomePage = () => {
  return (
    <main>
      <HeadingText className="center">Learn React.js with interview</HeadingText>
      <section className="center">
        <VerticalListGroup>
          <Link href={"/custom-hook"} label={"Custom Hook Implementation"} />
          <Link href={"/counter-app"} label={"Counter App"} />
          <Link href={"/todo-app"} label={"Todo app"} />
          <Link href={"/debounce-search"} label={"Debounced Searching"} />
          <Link href={"/forms"} label={"Auth form"} />
          <Link href={"/bread-crumbs"} label={"Bread-crumbs Implementation"} />
        </VerticalListGroup>
      </section>
    </main>
  );
};

export default HomePage;
