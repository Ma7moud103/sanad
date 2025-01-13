
function Input({ label, name, type, placeholder }) {
    return (
        <div className="flex flex-col w-full">
            <label
                htmlFor={name}
                className={`text-mainColor w-full text-start font-semibold text-size_12 relative`}
            >
                {label}
            </label>
            <input
                className={` w-full placeholder:text-size_12 text-size_12 border-[#BDC4CD] outline-none  focus:outline-none text-start border-[1px]   rounded-xl py-2 px-6 placeholder:text-start`}
                placeholder={placeholder}
                type={type}
                id={name}
                name={name}
                autoComplete={name}
                required
            />
        </div>
    )
}

export default Input