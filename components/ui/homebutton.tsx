import { ReactNode } from "react"

export default function HomeButton({
    children,
    onClick
}:{
    children: ReactNode;
    onClick: () => void;
}) {
    return (
        <div className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-lg transition-all" onClick={onClick}>
            {children}
        </div>
    )
}