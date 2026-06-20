import { Search,Zap } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export function Navbar() {

    const [input, setInput] = useState('');

    const navigate = useNavigate();

    const handleSearch = (e) =>{
        e.preventDefault();
        console.log(input);
        setInput("");
        navigate(`search/${input}`);
    }

    return(
        <>
           <nav className="sticky top-0 z-10 bg-gray-950/90 backdrop-blur-md shadow-2xl shadow-black/50 border-b border-blue-900/50 Max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <Link to={"/"} className="flex items-center font-black text-2xl text-white hover:text-blue-400 transition duration-300 tracking-widest">
                        <Zap className="w-7 h-7 mr-2 text-yellow-400 fill-yellow-400/20"/>
                        <span className="text-blue-400">Pro</span>Chef
                    </Link>
                    <div className="flex-1 max-w-lg mx-4 hidden sm:flex">
                        <input type="text" 
                        value={input} 
                        onChange={(e) =>{setInput(e.target.value)}} 
                        onKeyDown={(event)=>{
                            (event.key === "Enter") && handleSearch(event)
                        }}
                        placeholder="Search a dishes, ingredients or cuisine..." 
                        className="w-full px-5 py-2 border border-gray-700 bg-gray-900 text-gray-50 rounded-l-full focus:outline-none focus:inset-ring-2  focus:inset-ring-blue-600/30 placeholder-gray-500 shadow-inner shadow-black/50"/>
                        <button onClick={handleSearch} className=" bg-linear-to-r from-blue-600 to-cyan-500 pl-2 pr-4 rounded-r-full">
                            <Search/>
                        </button>
                    </div>
                </div>
           </nav>
        </>
    );
}