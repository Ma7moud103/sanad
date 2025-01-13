"use client"
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

function ThemeSwitch() {
    const [Mounted, setMounted] = useState(false)
    useEffect(() => setMounted(true), [])

    const { theme, setTheme } = useTheme()
    return Mounted ? <div className="absolute start-2 top-2">
        {theme === 'light' ?
            <FaMoon className="cursor-pointer  text-mainColor" size={22} onClick={() => setTheme('dark')} /> : <FaSun className="cursor-pointer text-white" size={24} onClick={() => setTheme("light")} />
        }

    </div> : <div className="absolute start-2 top-2 bg-slate-300 w-8 h-8 rounded-xl animate-pulse ">

    </div>



}

export default ThemeSwitch