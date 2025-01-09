"use client"
import { useEffect, useState } from "react";

import { FaMoon, FaRegMoon, FaSun } from "react-icons/fa";

function ThemeSwitch() {
    const [darkMode, setDarkMode] = useState(false)
    useEffect(() => {
        const theme = localStorage.getItem("theme")
        if (theme === "dark") setDarkMode(true)
    }, [])

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark")
            localStorage.setItem("theme", "dark")
        } else {
            document.documentElement.classList.remove("dark")
            localStorage.setItem("theme", "light")
        }
    }, [darkMode])


    return <div className="absolute start-2 top-2">
        {darkMode ? <FaMoon className="cursor-pointer dark:text-light_white" size={22} onClick={() => setDarkMode(false)} /> : <FaSun className="cursor-pointer text-mainColor" size={24} onClick={() => setDarkMode(true)} />}
    </div>



}

export default ThemeSwitch