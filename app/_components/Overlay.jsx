
function Overlay({ children, }) {
    return (
        <div className="bg-overlay absolute top-0 start-0 end-0 bottom-0 h-screen w-screen flex items-center justify-center">{children}</div>
    )
}

export default Overlay