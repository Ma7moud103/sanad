
function SelectGrade({ label, name, children, header, setSelectedItem, selectedItem = "" }) {
    return (
        <div>
            <label htmlFor={name} className="text-textColor__2 font-semibold">{header}: </label>
            <select className="border border-input_border w-full rounded-lg py-2 px-2 text-mainColor font-bold placeholder:font-normal  focus:outline-mainColor"
                placeholder={"choose the Grade"}
                name={name}
                required
                id={name}
                value={selectedItem || undefined}
                onChange={(e) => setSelectedItem?.(e.target.value)}
            >
                <option className="text-textColor__2" value="" key="">
                    {label}
                </option>
                {children}
            </select>
        </div>
    )
}

export default SelectGrade