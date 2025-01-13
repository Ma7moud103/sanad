"use client"
import { Fragment, useState } from "react";
import { FaAngleDown, FaAngleRight, FaAngleLeft } from "react-icons/fa";

function DailyGroupSM() {
    const [isOpened, setIsOpened] = useState(false)
    return (
        <Fragment>
            <div onClick={() => setIsOpened(prev => !prev)} className="bg-white cursor-pointer px-3 py-4 rounded-xl flex items-center justify-between ">
                <h6 className="text-mainColor font-bold">group 01</h6>
                <p className="text-textColor__2 font-bold">primary 01</p>
            </div>
            <div className={`${isOpened ? "bg-white p-2 rounded-xl mt-1 mb-2" : "h-0 opacity-0 transition-all "}`}>
                f
            </div>
        </Fragment>
    )
}

export default DailyGroupSM