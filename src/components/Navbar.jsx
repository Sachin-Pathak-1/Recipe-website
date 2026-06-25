import { Search,Zap } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export function Navbar() {

    const [input, setInput] = useState('');

    const navigate = useNavigate();

    const handleSearch = (e) =>{
        e.preventDefault();
        if (!input.trim()) return;
        e.currentTarget.querySelector("input")?.blur();
        setInput("");
        navigate(`search/${input.trim()}`);
    }

    return(
        <>
           <nav className="sticky top-0 z-20 bg-gray-950/90 backdrop-blur-md shadow-2xl shadow-black/50 border-b border-blue-900/50 max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16 gap-3">
                    <Link to={"/"} className="flex shrink-0 items-center font-black text-xl sm:text-2xl text-white hover:text-blue-400 transition duration-300 tracking-widest">
                        <Zap className="w-7 h-7 mr-2 text-yellow-400 fill-yellow-400/20"/>
                        <span className="text-blue-400">Pro</span>Chef
                    </Link>
                    <form onSubmit={handleSearch} className="flex-1 max-w-lg sm:mx-4 flex min-w-0">
                        <input type="text" 
                        value={input} 
                        onChange={(e) =>{setInput(e.target.value)}} 
                        placeholder="Search recipes..." 
                        className="w-full min-w-0 px-4 sm:px-5 py-2 border border-gray-700 bg-gray-900 text-gray-50 rounded-l-full focus:outline-none focus:inset-ring-2 focus:inset-ring-blue-600/30 placeholder-gray-500 shadow-inner shadow-black/50"/>
                        <button type="submit" className="bg-linear-to-r from-blue-600 to-cyan-500 px-3 sm:pl-2 sm:pr-4 rounded-r-full shrink-0">
                            <Search className="w-5 h-5"/>
                        </button>
                    </form>
                </div>
           </nav>
        </>
    );
}
