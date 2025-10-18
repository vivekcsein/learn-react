import Link from "../ui/Link";
import { Outlet } from "react-router-dom";
import { CenteredFlexContainer, HeadingText, VerticalListGroup } from "../ui/StyledUI";

const FormPage = () => {
  return (
    <section className="center">
      <CenteredFlexContainer>
        <div>
          <VerticalListGroup>
            <HeadingText>User Login</HeadingText>
            <Link href={"/forms/signin"} label={"signin"} />
            <HeadingText>User Registration</HeadingText>
            <Link href={"/forms/signup"} label={"signup"} />
          </VerticalListGroup>
        </div>
      </CenteredFlexContainer>
      <Outlet />
    </section>
  );
};

export default FormPage;
