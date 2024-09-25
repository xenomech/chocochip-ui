import "../../styles/globals.css";
function Button(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button className="bg-red-300 px-3 py-2 rounded-md" {...props} />;
}

export default Button;
