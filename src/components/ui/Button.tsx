interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  children?: React.ReactNode;
}

const Button = ({ label, onClick, type, children }: ButtonProps) => {
  const handler = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <button className="app-button" onClick={handler} type={type}>
      {label && <span>{label}</span>}
      {children}
    </button>
  );
};

export default Button;
