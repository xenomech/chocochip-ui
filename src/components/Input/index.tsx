import "@/styles/globals.css";
function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input className="bg-pink-600 border p-10" {...props} />;
}

export default Input;
