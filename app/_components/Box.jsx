
function Box({ children, bgColor }) {
    return (
        <div className={`${bgColor} p-4 rounded-2xl flex  items-center gap-x-3`}>
            {children}
        </div>
    )
}

export default Box