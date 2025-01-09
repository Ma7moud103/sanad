"use client"

function FormContent() {
    return (
        <div className=" w-full grid grid-cols-2 gap-x-2">

            <div className="">
                <label htmlFor="groupName" className="text-textColor__2 font-semibold">Group Name: </label>
                <input type="text" className="border border-input_border w-full rounded-lg py-1 px-2 text-mainColor font-bold placeholder:font-normal  focus:outline-mainColor" placeholder={"groupName"} />
            </div>

            <div className="">
                <label htmlFor="groupName" className="text-textColor__2 font-semibold">Group Name: </label>
                <input type="text" className="border border-input_border w-full rounded-lg py-1 px-2 text-mainColor font-bold placeholder:font-normal  focus:outline-mainColor" placeholder={"groupName"} />
            </div>

        </div>
    )
}

export default FormContent