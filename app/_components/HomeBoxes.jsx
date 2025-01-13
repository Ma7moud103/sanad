import { FaChalkboardTeacher } from "react-icons/fa";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { PiStudent } from "react-icons/pi";

import CheckerBox from "./CheckerBox";

function HomeBoxes() {

    return (
        <>
            <div className={'bg-whiteColor_FFF w-full   p-4 rounded-2xl flex  items-center gap-x-3'}>
                <div className="icon  relative   bg-bg_mainLayout dark:bg-zinc-900 w-[3rem] h-[3rem] rounded-full">
                    <MdOutlineLibraryBooks size={30} className="absolute text-mainColor dark:text-light_white 	top-[50%] start-[50%] translate-x-[-50%] translate-y-[-50%]" />
                </div>
                <header>
                    <p className="text-textGray dark:text-mainColor">Courses</p>
                    <h4 className="text-mainColor font-semibold ">3 Courses</h4>
                </header>
            </div>
            <div className={' w-full bg-whiteColor_FFF   p-4 rounded-2xl flex  items-center gap-x-3'}>
                <div className="icon relative bg-bg_mainLayout dark:bg-zinc-900 w-[3rem] h-[3rem] rounded-full">
                    <FaChalkboardTeacher size={30} className="absolute 	top-[50%] start-[50%] translate-x-[-50%] translate-y-[-50%] dark:text-light_white text-mainColor" />
                </div>
                <header>
                    <p className="text-textGray dark:text-mainColor">Teachers</p>
                    <h4 className="text-mainColor font-semibold ">30 Teacher</h4>
                </header>
            </div>
            <div className={'w-full bg-gradient-to-tr from-blue_light to-mainColor  p-4 rounded-2xl flex  items-center gap-x-3 '}>
                <div className="icon  relative  bg-bg_mainLayout dark:bg-zinc-900 w-[3rem] h-[3rem] rounded-full">
                    <PiStudent size={30} className="absolute 	top-[50%] start-[50%] translate-x-[-50%] translate-y-[-50%] dark:text-light_white text-mainColor" />
                </div>
                <header>
                    <p className="text-white">Students</p>
                    <h4 className="text-white font-semibold">333 Student</h4>
                </header>
            </div>
            <CheckerBox>
                Check Card
            </CheckerBox>
        </>
    )
}

export default HomeBoxes