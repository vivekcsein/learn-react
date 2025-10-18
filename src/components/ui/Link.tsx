import { Link as RouterLink } from "react-router-dom";

interface LinkProps {
  href: string;
  label?: string;
  children?: React.ReactNode;
  className?: string;
}

const Link = ({ href, label, children, className = "app-button" }: LinkProps) => {
  return (
    <RouterLink to={href} className={`${className ?? "app-button"} `}>
      {label ?? children}
    </RouterLink>
  );
};

export default Link;
