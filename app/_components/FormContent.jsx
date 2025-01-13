import { useState } from "react"
import { days } from "../_lib/vars"
import SelectGrade from "./SelectGrade"

function FormContent({ grades, courses, teachers }) {
    const [SelectedCourse, setSelectedCourse] = useState("")
    const [SelectedTeacher, setSelectedTeacher] = useState("")
    const courseName = SelectedCourse && courses.filter(course => course.id == SelectedCourse).at(0).name
    const teacherName = SelectedTeacher && teachers.filter(teacher => teacher.id == SelectedTeacher).at(0).teacherName
    return (
        <div className=" w-full grid grid-cols-2 gap-2 gap-x-3 my-5">
            <input type="hidden" name="courseName" value={courseName} />
            <input type="hidden" name="teacherName" value={teacherName} />
            <div className="">
                <label htmlFor="name" className="text-textColor__2 font-semibold">Group Name: </label>
                <input type="text" className="border border-input_border w-full rounded-lg py-1 px-2 text-mainColor font-bold placeholder:font-normal  focus:outline-mainColor"
                    placeholder={"type group Name"}
                    name="name"
                    id="name"
                    required
                />
            </div>

            <SelectGrade
                header={"Grade"}
                label={"Select grade of grades..."}
                name={'grade'}
            >
                {grades.map(grade => (
                    <option value={grade.name} key={grade.id}>
                        {grade.name}
                    </option>
                ))}
            </SelectGrade>


            <SelectGrade
                selectedItem={SelectedCourse}
                setSelectedItem={setSelectedCourse}
                header={'Course'}
                label={"Select Course..."}
                name={'courseId'}
            >
                {courses.map(course => (
                    <>
                        <option value={course.id} key={course.id}>
                            {course.name}
                        </option>

                    </>

                ))}
            </SelectGrade>
            <SelectGrade
                selectedItem={SelectedTeacher}
                setSelectedItem={setSelectedTeacher}
                header={'Teacher'}
                label={"Select Teacher..."}
                name={'teacherId'}
            >
                {teachers.map(teacher => (
                    <>
                        <option value={teacher.id} key={teacher.id}>
                            {teacher.teacherName}
                        </option>
                    </>

                ))}
            </SelectGrade>


            <div className="">
                <label htmlFor="studentsNum" className="text-textColor__2 font-semibold">Students: </label>
                <input type="number" className="border border-input_border w-full rounded-lg py-1 px-2 text-mainColor font-bold placeholder:font-normal  focus:outline-mainColor"
                    placeholder={"Type Number Of Students"}
                    required
                    name="studentsNum"
                    id="studentsNum"
                />
            </div>
            <div>
                <label htmlFor="startDate" className="text-textColor__2 font-semibold">Start Date: </label>
                <input type="time" className="border border-input_border w-full rounded-lg py-1 px-2 text-mainColor font-bold placeholder:font-normal  focus:outline-mainColor"
                    placeholder={"Type Start Date"}
                    name="startDate"
                    id="startDate"
                />
            </div>
            <div>
                <label htmlFor="endDate" className="text-textColor__2 font-semibold">end Date: </label>
                <input type="time" className="border border-input_border w-full rounded-lg py-1 px-2 text-mainColor font-bold placeholder:font-normal  focus:outline-mainColor"
                    placeholder={"Type End Time"}
                    name="endDate"
                    id="endTime"
                />
            </div>
            <SelectGrade
                header={"Day"}
                label={"Select a Day..."}
                name={'day'}
            >
                {days.map((day) => (
                    <option value={day.name} key={day.id}>
                        {day.name}
                    </option>
                ))}
            </SelectGrade>

        </div>
    )
}

export default FormContent