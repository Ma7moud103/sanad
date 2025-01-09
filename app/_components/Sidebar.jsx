import Info from "./Info"
import Logo from "./Logo"
import Logout from "./Logout"
import Navigations from "./Navigations"
import Support from "./Support"
import ThemeSwitch from "./ThemeSwitch"

function Sidebar() {
    return (
        <div className={`h-full dark:bg-zinc-900 dark:shadow-2xl bg-white  absolute start-0 top-0 end-0 bottom-0  transition-all lg:static duration-300 w-[16rem]     flex flex-col items-center `}>
            <ThemeSwitch />
            <Logo />
            <Info />
            <Navigations />
            <Support />
            <Logout />
        </div>
    )
}

export default Sidebar