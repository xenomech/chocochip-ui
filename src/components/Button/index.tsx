import React from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}
  
function Button(props: ButtonProps) {
  return <button {...props} />;
}

export default Button;
