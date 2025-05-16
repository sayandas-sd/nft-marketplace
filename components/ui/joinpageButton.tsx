import { ReactNode } from "react";

type JoinpageButtonProps = {
  children: ReactNode;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  className?: string;
};

export default function JoinpageButton({
  children,
  disabled = false,
  type = "button",
  
}: JoinpageButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-lg transition-all flex items-center justify-center space-x-2 
                ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
    >
      {children}
    </button>
  );
}


