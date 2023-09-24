import { InputHTMLAttributes } from "react";

type Props = InputHTMLAttributes<HTMLInputElement>;

const FormButton = (props: Props) => {
  return (
    <input
      className="rounded border shadow px-2 hover:cursor-pointer active:bg-slate-300"
      {...props}
    />
  );
};

export default FormButton;
