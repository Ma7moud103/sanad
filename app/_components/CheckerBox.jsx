
"use client"
import { CiCirclePlus } from "react-icons/ci"


function CheckerBox({ children }) {

    function handleClick() {

    }

    return (
        <button onClick={handleClick} className="p-4 rounded-2xl flex  items-center gap-x-3 bg-white dark:bg-zinc-300">
            <div className="icon relative bg-bg_mainLayout dark:bg-zinc-900 w-[3rem] h-[3rem] rounded-full">
                <CiCirclePlus size={30} className="absolute text-mainColor dark:text-light_white 	top-[50%] start-[50%] translate-x-[-50%] translate-y-[-50%]" />
            </div>

            <h4 className="text-mainColor  font-semibold">{children}</h4>
        </button>
    )
}

export default CheckerBox