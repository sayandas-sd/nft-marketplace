
export default function InputBox({
    onChange,
    type,
    placeholder,
    id
}:{
    id: string;
    onChange: (e:any) => void;
    placeholder:  string;
    type?: "text" | "password";
}) {
    return (
        <div>
            <input id={id}
                   type={type} 
                   onChange={onChange}
                   placeholder={placeholder}
                   className="w-full bg-black/30 border border-purple-900 text-white placeholder:text-purple-300/50 focus:border-purple-400 focus-visible:ring-purple-400/20 py-2 px-4 rounded-md "
                   />
        </div>
    )
}