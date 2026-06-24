import Image from "next/image";

export function Navbar() {
    return (
        <header className="w-full border-b border-gray-700 sticky top-0 z-50">
            <nav className="max-w-7xl mx-auto flex justify-between items-center p-4 text-white bg-surface  ">
                <div className="flex items-center gap-4">
                    <Image src="/logo.png" alt="Logo" width="50" height="50" />
                    <span className="font-bold text-xl text-primary">Aura AI</span>
                </div>
                <div>
                    <button className="px-4 py-2 rounded-md bg-secondary hover:bg-secondary-hover">Sign In</button>
                </div>
            </nav>
        </header>
    )
}