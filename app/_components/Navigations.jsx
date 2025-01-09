"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { FaChalkboardTeacher, FaHome, FaReadme } from "react-icons/fa"
import { LuBadgeDollarSign } from "react-icons/lu"
import { PiStudentLight } from "react-icons/pi"

function Navigations() {
    const pathName = usePathname()
    const routes = [
        {
            name: "Home",
            href: "/",
            icon: FaHome
        },
        {
            name: "Courses",
            href: "/courses",
            icon: FaReadme
        },
        {
            name: "Teachers",
            href: "/teachers",
            icon: FaChalkboardTeacher
        },
        {
            name: "Students",
            href: "/students",
            icon: PiStudentLight
        },
        {
            name: "Revenues",
            href: "/revenues",
            icon: LuBadgeDollarSign
        },
    ]
    return (
        <ul className="w-full my-4 flex flex-col gap-y-2">
            {routes.map(route => {
                return (
                    <li key={route.name}>
                        <Link className="flex items-center justify-between px-3 py-2  relative group" href={route.href}>
                            <div className="flex items-center gap-x-2">
                                {route.icon && (
                                    <route.icon
                                        size={28}

                                        className={` ${pathName === route.href && "text-mainColor dark:text-blue_light"} text-textGray dark:text-light_white group-hover:text-mainColor dark:group-hover:text-blue_light transition-all`}
                                    />
                                )}

                                <span className={`${pathName === route.href ? "text-mainColor dark:text-blue_light " : "text-textGray"} dark:text-light_white  transition-colors font-bold group-hover:text-mainColor dark:group-hover:text-blue_light`}>{route.name}</span>
                            </div>
                            <span className={`h-[90%] ${pathName !== route.href && "hidden"} w-1 bg-gradient-to-tr from-blue_light to-mainColor absolute end-1 rounded-xl`}></span>
                        </Link>
                    </li>
                )
            })}
        </ul>
    )
}

export default Navigations