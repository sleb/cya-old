import { ButtonHTMLAttributes } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

const Button = (props: Props) => {
  return (
    <button className="bg-white rounded-md" {...props}>
      {props.children}
    </button>
  );
};

export default Button;
