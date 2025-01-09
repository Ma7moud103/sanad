import { LuFileSpreadsheet } from "react-icons/lu";

function DailyGroup({ group }) {
    const { name, grade, courseName, teacherName, studentsNum, startDate, endDate, day } = group
    return (
        <div className=" relative grid grid-cols-5 items-center px-4 py-1 border border-input_border border-b-[1px] ">
            <div>
                <h6 className="text-mainColor font-bold">{name}</h6>
                <p className="text-textGray ">{grade}</p>
            </div>
            <div >
                <h6 className="text-textGray font-bold">{courseName}</h6>
                <p className="text-mainColor">{teacherName}</p>
            </div>
            <p className="font-bold text-mainColor">{studentsNum} students</p>
            <p className="font-bold text-textGray">{startDate} </p>
            <p className="font-bold text-textGray">{endDate} </p>
            <div className="absolute end-3 top-[50%] translate-y-[-50%]">
                <LuFileSpreadsheet className="cursor-pointer" size={22} color="gray" />
            </div>
        </div>
    )
}

export default DailyGroup