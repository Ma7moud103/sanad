
function Overlay({ children, }) {
    return (
        <div className="bg-overlay backdrop-blur-[2px] absolute top-0 start-0 end-0 bottom-0 z-10 h-screen w-screen flex items-center justify-center">{children}</div>
    )
}

export default Overlay