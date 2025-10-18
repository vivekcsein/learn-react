import { useRef, useState } from "react";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import {
  HeadingText,
  HorizontalItemGroup,
  ParaText,
  VerticalItemGroup,
  VerticalListItems,
} from "../../ui/StyledUI";

interface inputProps {
  email: string;
  password: string;
}

const Signin = () => {
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const [submittedData, setSubmittedData] = useState<inputProps>({
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const email = emailRef.current?.value || "";
    const password = passwordRef.current?.value || "";

    if (!email || !password) {
      alert("Please fill out all fields.");
      return;
    }

    setSubmittedData({ email, password });
  };

  return (
    <>
      <HeadingText>login User</HeadingText>
      <form onSubmit={handleSubmit}>
        <VerticalItemGroup>
          <Input id="email" type="email" placeholder="Email" ref={emailRef} />
          <Input id="password" type="password" placeholder="Password" ref={passwordRef} />
          <Button label="Submit" type="submit" />
        </VerticalItemGroup>
      </form>
      {submittedData && (
        <>
          <HeadingText>Submitted Info:</HeadingText>
          <br />
          <VerticalListItems>
            <ParaText>
              <HorizontalItemGroup>
                <strong>Email:</strong> {submittedData.email}
              </HorizontalItemGroup>
              <HorizontalItemGroup>
                <strong>Password:</strong> {submittedData.password}
              </HorizontalItemGroup>
            </ParaText>
          </VerticalListItems>
        </>
      )}
    </>
  );
};

export default Signin;
