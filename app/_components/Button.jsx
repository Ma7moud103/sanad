function Button({ children, onClick }) {
    return (
        <button onClick={() => onClick?.()} className="bg-gradient-to-tr from-blue_light to-mainColor rounded-xl text-white py-2 px-3 flex items-center gap-x-2">
            {children}
        </button>
    )
}

export default Button