import { getCourses, getCurrentGroups, getGrades, getTeachers } from "../_lib/serveces"
import DailyGroup from "./DailyGroup"
import DailyGroupSM from "./DailyGroupSM";
import Filter from "./Filter"

async function DailyGroups() {

    const groups = await getCurrentGroups()
    const grades = await getGrades()
    const courses = await getCourses()
    const teachers = await getTeachers()



    return (
        <>
            <section className="bg-white dark:bg-zinc-300 p-4 rounded-lg min-h-[32rem] xl:flex flex-col gap-y-4 hidden">
                <header className="flex justify-between items-center ">
                    <h1 className="text-mainColor font-bold text-[1.7rem]">Daily Groups</h1>
                    <Filter teachers={teachers} courses={courses} grades={grades} />
                </header>
                <div className="rounded-lg border border-borderMainColor ">
                    <header className="grid grid-cols-5 px-3 py-5 bg-[#F9FAFC]">
                        <p className="text-textColor__2 font-semibold">Group Name</p>
                        <p className="text-textColor__2 font-semibold">Course Name</p>
                        <p className="text-textColor__2 font-semibold">Students</p>
                        <p className="text-textColor__2 font-semibold">Start</p>
                        <p className="text-textColor__2 font-semibold">End</p>
                    </header>
                    <div className="content border-borderMainColor border-t-[1px] ">
                        {groups.map(group => <DailyGroup group={group} key={group.id} />)}
                    </div>
                </div>
                <div className="pagination mt-3 self-center">
                    pagination
                </div>
            </section>
            <section className="rounded-lg min-h-[32rem] flex flex-col gap-y-4 xl:hidden">
                <header className="flex justify-between items-center ">
                    <h1 className="text-mainColor font-bold text-[1.2rem] sm:text-[1.7rem]">Daily Groups</h1>
                    <Filter teachers={teachers} courses={courses} grades={grades} />
                </header>

                <div className="flex flex-col mt-3 gap-y-1">
                    {groups.map(group => <DailyGroupSM key={group.id} />)}

                </div>
            </section>
        </>
    )
}

export default DailyGroups