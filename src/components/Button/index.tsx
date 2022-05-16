import { ReactNode } from "react";
import { Button } from "./styles"

interface ButtonLinkedProps {
  to: string;
  children?: ReactNode;
  primary?: boolean;
  big?: boolean;
  dark?: boolean;
  fontBig?: boolean;

}

const ButtonLinked = ({ to, children, big, dark, fontBig, primary }: ButtonLinkedProps) => {
  return (
    <Button to={to} big={big} dark={dark} fontBig={fontBig} primary={primary}>
      {children}
    </Button>
  )
}
export default ButtonLinked