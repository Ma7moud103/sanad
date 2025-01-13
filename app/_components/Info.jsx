import Image from "next/image"
import user from '@/public/Profile.svg'
import { FaBell } from "react-icons/fa";

function Info() {
    return (
        <div className=" border border-x-0 dark:border-zinc-800 border-light_white border-y-2 py-2 px-3 w-full flex items-center justify-between">
            <div className="image flex items-center gap-x-2">
                <Image src={user} width={45} height={45} alt="profile" />
                <div>
                    <h5 className="text-[0.8rem] dark:text-whiteColor_FFF text-mainColor font-bold ">Ahmed Shawky</h5>
                    <p className="text-textGray text-[0.7rem] font-bold ">Assistant Owner</p>
                </div>
            </div>
            <div className="icon w-9 h-9 relative rounded-xl dark:border-zinc-600 border border-input_border  ">
                <FaBell className="absolute top-[50%] start-[50%] translate-x-[-50%] translate-y-[-50%]" size={22} color="#023E8ACC" />
            </div>
        </div>
    )
}

export default Info