"use client"
import { useState } from "react"
import { MdOutlineMenu } from "react-icons/md"
import Info from "./Info"
import Logo from "./Logo"
import Logout from "./Logout"
import Navigations from "./Navigations"
import Support from "./Support"
import ThemeSwitch from "./ThemeSwitch"
import { IoMdClose } from "react-icons/io";


function Sidebar() {
    const [IsOpened, setIsOpened] = useState(true)

    return (

        <aside className={`${IsOpened && "absolute z-20  top-0 bottom-0 start-0 end-0 bg-blurBg"} transition-all lg:bg-transparent lg:static`}>
            <div className={`h-full dark:bg-zinc-900 dark:shadow-2xl bg-white  absolute start-0 top-0 end-0 bottom-0  transition-all lg:static duration-300  ${IsOpened ? "w-[16rem]" : "w-[0rem] opacity-0 "} transition-all    flex flex-col items-center `}>
                <span onClick={() => setIsOpened(false)} className="absolute top-2 end-2 cursor-pointer lg:hidden">
                    <IoMdClose size={25} className="text-mainColor hover:text-red-500 transition-colors" />
                </span>
                <ThemeSwitch />
                <Logo />
                <Info />
                <Navigations />
                <Support />
                <Logout />
            </div>

            <div className={`${IsOpened ? "hidden" : "absolute m-4 end-0 bg-whiteColor_FFF rounded-lg  p-[2px]"} cursor-pointer lg:hidden `} onClick={() => setIsOpened(prev => !prev)}>
                <MdOutlineMenu size={27} className="text-mainColor font-bold" />
            </div>


        </aside>

    )
}

export default Sidebar