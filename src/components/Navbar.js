import { useState } from 'react'
import { FaSistrix } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'

function Navbar() {
    const [isOpen, toggleSearch] = useState(false)
    const handleSearch = () => {
        toggleSearch(!isOpen)
    }
    return (
        <>
            {!isOpen && (
                <nav className="flex h-16 w-full items-center justify-between gap-6 bg-slate-50 px-4 py-4 shadow-md lg:justify-start">
                    <h1 className="cursor-pointer text-3xl font-bold text-pink-600">
                        INDIEGOGO
                    </h1>
                    <ul className="hidden w-full items-center  gap-6 lg:flex">
                        <li className="cursor-pointer hover:text-pink-600">
                            Explore
                        </li>
                        <li className="cursor-pointer hover:text-pink-600">
                            Our top 10 finds
                        </li>
                        <li className="cursor-pointer hover:text-pink-600">
                            Team Favourites
                        </li>
                        <li className="cursor-pointer hover:text-pink-600">
                            <FaSistrix
                                size="22px"
                                className=" hover:text-pink-400"
                                onClick={handleSearch}
                            />
                        </li>
                        <li className="ml-auto cursor-pointer hover:text-pink-600">
                            Start a Campaign
                        </li>
                        <li className="cursor-pointer hover:text-pink-600">
                            What we Do
                        </li>
                        <li className="cursor-pointer hover:text-pink-600">
                            Log In
                        </li>
                        <li className="cursor-pointer hover:text-pink-600">
                            Sign Up
                        </li>
                    </ul>
                    <FaSistrix
                        size="22px"
                        className=" cursor-pointer hover:text-pink-600 lg:hidden"
                        onClick={handleSearch}
                    />
                </nav>
            )}
            {isOpen && (
                <nav className="flex h-16 w-screen items-center gap-6 bg-slate-50 px-4 py-4 shadow-md">
                    <FaSistrix size="22px" />
                    <input
                        type="text"
                        placeholder="Search"
                        className="flex-grow px-4 py-2 outline-none"
                    />
                    <AiOutlineClose
                        size="22px"
                        onClick={handleSearch}
                        className=" cursor-pointer hover:text-pink-400"
                    />
                </nav>
            )}
        </>
    )
}

export default Navbar
