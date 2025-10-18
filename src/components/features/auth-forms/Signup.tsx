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
  name: string;
  email: string;
  password: string;
}

const Signup = () => {
  const nameRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const [submittedData, setSubmittedData] = useState<inputProps>({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const name = nameRef.current?.value || "";
    const email = emailRef.current?.value || "";
    const password = passwordRef.current?.value || "";

    if (!name || !email || !password) {
      alert("Please fill out all fields.");
      return;
    }

    setSubmittedData({ name, email, password });
  };

  return (
    <>
      <HeadingText>Register User</HeadingText>
      <form onSubmit={handleSubmit}>
        <VerticalItemGroup>
          <Input id="name" type="text" placeholder="Name" ref={nameRef} />
          <Input id="email" type="email" placeholder="Email" ref={emailRef} />
          <Input id="password" type="password" placeholder="Password" ref={passwordRef} />
          <Button type="submit">Submit</Button>
        </VerticalItemGroup>
      </form>
      {submittedData && (
        <>
          <HeadingText>Submitted Info:</HeadingText>
          <br />
          <VerticalListItems>
            <ParaText>
              <HorizontalItemGroup>
                Name:
                <strong>{submittedData.name}</strong>
              </HorizontalItemGroup>
              <HorizontalItemGroup>
                Email:
                <strong>{submittedData.email}</strong>
              </HorizontalItemGroup>
              <HorizontalItemGroup>
                Password:
                <strong>{submittedData.password}</strong>
              </HorizontalItemGroup>
            </ParaText>
          </VerticalListItems>
        </>
      )}
    </>
  );
};

export default Signup;
