import { Cuisine } from "../components/Cuisine";
import { Navbar } from "../components/Navbar";

export function Layout({ children }) {
    return(
        <div className="min-h-screen bg-gray-950 font-sans text-gray-100">
            <Navbar/>
            <Cuisine/>
            {children}
        </div>
    )
}