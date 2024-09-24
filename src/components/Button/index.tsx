import React from "react";

function Button(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button {...props} />;
}

export default Button;
